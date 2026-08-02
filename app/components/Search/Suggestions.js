export default function Suggestions({showSuggestions,suggestions,formik})
{
    return(
        <>
              {
        showSuggestions &&suggestions.length>0 && (
        
        <div className="mt-2 rounded-xl bg-white shadow-xl overflow-hidden">
        
        {
        suggestions.map((item)=>(
        <div
        key={`${item.lat}-${item.lon}`}
        className="cursor-pointer px-4 py-3 hover:bg-sky-100 dark:bg-black"
        onClick={()=>{
        formik.setFieldValue("city",item.name)
        setShowSuggestions(false)
        formik.handleSubmit();
        }}
        >
        {item.name},
        {item.country}
        </div>
        ))
        }
        </div>
        )
        }
        </>
    )
}