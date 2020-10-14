const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			single: {},
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getItem: (subject, index) => {
				console.log(`https://swapi.dev/api/${subject}/${index}/`);
				fetch(`https://swapi.dev/api/${subject}/${index}/`)
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(resjson => {
						setStore({
							single: resjson
						});
					});
			},
			getPeople: () => {
				fetch("https://swapi.dev/api/people/", {
					method: "GET"
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(resjson => {
						setStore({
							people: resjson.results
						});
					});
			},
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/", {
					method: "GET"
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(resjson => {
						setStore({
							planets: resjson.results
						});
					});
			},
			getStarships: () => {
				fetch("https://swapi.dev/api/starships/", {
					method: "GET"
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(resjson => {
						setStore({
							starships: resjson.results
						});
					});
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			saveFavorites: (name, category) => {
				const store = getStore();
				var arrayCategory = name;
				setStore({ favorites: [...store.favorites, arrayCategory] });
			},
			deleteFav: (index, category) => {
				const store = getStore();
				const newArray = store.favorites.filter((bubu, i) => i != index); // the second parameter is always the index. Check here https://www.w3schools.com/jsref/jsref_filter.asp
				// const favArray = [...store.favorites];
				// const favToRemove = store.favorites.filter(name => !favArray.includes(name));
				console.log(newArray);
				setStore({ favorites: newArray });
			}
		}
	};
};

export default getState;
