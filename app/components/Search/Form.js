import Suggestions from "./Suggestions";
export default function Form({formik,suggestions,showSuggestions,getSuggestions,setShowSuggestions})
{
    return(
        <>
         <form
                onSubmit={formik.handleSubmit}
                className="mx-auto flex max-w-xl flex-col gap-4"
              >
                <input
                  name="city"
                  value={formik.values.city}
                  onChange={(e)=>{formik.handleChange(e);setShowSuggestions(true);dispatch(getSuggestions(e.target.value))}}
                  onBlur={()=>{formik.handleBlur , setShowSuggestions(false)}}
                  placeholder="Enter city..."
                  className="dark:bg-gray-700 dark:text-white rounded-xl border border-white/30 bg-white/20 px-5 py-4 text-white outline-none placeholder:text-white/70 backdrop-blur-md"
                />
              <Suggestions suggestions={suggestions} showSuggestions={showSuggestions} formik={formik}/>
        
                {formik.touched.city && formik.errors.city && (
                  <p className="text-red-200">{formik.errors.city}</p>
                )}
        
                <button
                  type="submit"
                  className="dark:text-black rounded-xl bg-white py-4 font-bold text-blue-600 transition hover:scale-105"
                >
                  Search
                </button>
              </form>
        
        </>
    )
}