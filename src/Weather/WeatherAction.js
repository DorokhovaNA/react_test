import { URL_API, setLoading, setError, data, setData } from "./WeatherSlice";

export const getWeather = () => async (dispatch, getState) => {
	const { 
		weather: { data, loading, error }, 
	} = getState();
	if(!loading) {
		try {
			dispatch(setError(false));
			dispatch(setLoading(true));
			const responce = await fetch(URL_API);
			if(!responce.ok) {
				throw new Error("Something went wrong");
			}
			const result = await responce.json();
			console.log(result);
			dispatch(setData(result));
		} catch(e) {
			dispatch(setError(true));
		} finally {
			dispatch(setLoading(false));
		}
	}
};