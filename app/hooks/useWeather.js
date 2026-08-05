import { useDispatch, useSelector } from "react-redux";


export default function useWeathear()
{
     const dispatch = useDispatch();
     const weather = useSelector((state) => state.weather.weather);
     const forecast = useSelector((state) => state.weather.forecast);
     const loading = useSelector((state) => state.weather.loading);
     const suggestions = useSelector((state)=>state.weather.suggestions)
     const air = useSelector((state)=>state.weather.air);
     const extra = useSelector((state)=>state.weather.extra)
     return {dispatch , weather , forecast , loading , air  , suggestions , extra}
}