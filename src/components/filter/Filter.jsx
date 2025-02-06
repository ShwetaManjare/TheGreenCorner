import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../utils/navbar/footer/Footer'
import Navbar from '../utils/navbar/Navbar'

const Filter = () => {
    const [data, setData] = useState([])
    const [sort, setSort] = useState("")
    const [categories, setCategories] = useState([]) 
    const [priceRange, setPriceRange] = useState("") 
    const [filteredData, setFilteredData] = useState([])

    // Fetch Data
    useEffect(() => {
        axios.get("http://localhost:4000/plants").then((resp) => {
            setData(resp.data || [])
            setFilteredData(resp.data || [])
        })
    }, [])

    // Filtering Logic
    useEffect(() => {
        let filteredItems = data

        // 🔎 Filter by name (search input)   
        if (sort) {
            filteredItems = filteredItems.filter((plant) =>
                plant.name?.toLowerCase().includes(sort.toLowerCase())
            )
        }

        // 🔎 Filter by selected categories (checkboxes)
        if (categories.length > 0) {
            filteredItems = filteredItems.filter((plant) =>
                plant.categories && categories.some(category => plant.categories.includes(category))
            )
        }

        // 🔎 Filter by price range
        // if (priceRange) {
        //     filteredItems = filteredItems.filter((plant) => {
        //         const price = parseFloat(plant.price)
        //         switch (priceRange) {
        //             case "low":
        //                 return price < 20
        //             case "medium":
        //                 return price >= 20 && price <= 50
        //             case "high":
        //                 return price > 50
        //             default:
        //                 return true
        //         }
        //     })
        // }

        setFilteredData(filteredItems)
    }, [sort, categories,  data]) 

    
    // let timer ;
    // let debouncedFunction = setTimeout(()=>{
    //     setSort()
    // },1000)
    // let handleSort = (e)=>{
    //     if(timer){
    //         clearTimeout()
    //     }
    //    timer = debouncedFunction()

    // ✅ Handle Checkbox Selection
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target
        setCategories(prevCategories =>
            checked ? [...prevCategories, value] : prevCategories.filter(cat => cat !== value)
        )
    }

    return (
        <>
        <Navbar/>
        
        <div className='flex w-full h-[100vh] '>
            
            <div className='w-[25%] bg-slate-500 h-[100%] p-5   '>
                <form> 
                    <input 
                        type="text" 
                        placeholder="Search by name" 
                        onChange={(e) => setSort(e.target.value)} 
                        // onChange={handleSort} 
                        className="p-2 border rounded"
                    />
                    <br /><br />

                    {/* ✅ Checkboxes for Category Selection */}
                    <label>
                        <input 
                            type="radio" 
                            value="indoor" 
                            onChange={handleCheckboxChange} 
                            checked={categories.includes("indoor")} 
                        />
                        Indoor
                    </label>
                    <br />
                    {/* <label>
                        <input 
                            type="checkbox" 
                            value="outdoor" 
                            onChange={handleCheckboxChange} 
                            checked={categories.includes("outdoor")} 
                        />
                        Outdoor
                    </label>
                    <br />
                    <label>
                        <input 
                            type="checkbox" 
                            value="lowMaintenance" 
                            onChange={handleCheckboxChange} 
                            checked={categories.includes("lowMaintenance")} 
                        />
                        Low-Maintenance
                    </label> */}

                    <br /><br />
                    
                    {/*  Radio Buttons for Price Filtering */}
                    {/* <p>Filter by Price:</p>
                    <label>
                        <input 
                            type="radio" 
                            value="low" 
                            name="price" 
                            onChange={(e) => setPriceRange(e.target.value)} 
                            checked={priceRange === "low"} 
                        />
                        Below $20
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio" 
                            value="medium" 
                            name="price" 
                            onChange={(e) => setPriceRange(e.target.value)} 
                            checked={priceRange === "medium"} 
                        />
                        $20 - $50
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio" 
                            value="high" 
                            name="price" 
                            onChange={(e) => setPriceRange(e.target.value)} 
                            checked={priceRange === "high"} 
                        />
                        Above $50
                    </label>
                    <br />
                    <button 
                        type="button" 
                        className="mt-3 p-2 bg-red-500 text-white rounded"
                        onClick={() => setPriceRange("")} // Reset price filter
                    >
                        Clear Price Filter
                    </button> */}
                </form> 
            </div>

            <div className='flex flex-wrap  gap-10 w-[75%] p-4  overflow-scroll m-10'>
                {
                    filteredData.length > 0 ? (
                        filteredData.map((plant, index) => (
                            <div key={index} className='w-[20%] h-[45%] p-5 border-2  rounded-md bg-zinc-300 shadow-lg '>
                                <img src={plant.primaryImage} alt=""  className=' w-full rounded-lg object-contain shadow-lg'/>
                                <p className='text-black font-semibold flex justify-center items-center'>{plant.name}</p>
                                <p className='text-green-800 font-semibold flex justify-center items-center'>Price: ${plant.price}</p>
                                {/* <p>Categories: {plant.categories?.join(", ") || "None"}</p> 8*/}
                            </div>
                        ))
                    ) : <p>Data not found</p>
                }
            </div>
            
        </div>
        <Footer/>
        </>
    )
}

export default Filter



// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const Filter = () => {
//     const [data, setData] = useState([])
//     const [sort, setSort] = useState("")
//     const [categories, setCategories] = useState([]) // ✅ Array to store selected categories
//     const [filteredData, setFilteredData] = useState([])

//     // Fetch Data
//     useEffect(() => {
//         axios.get("http://localhost:4000/plants").then((resp) => {
//             setData(resp.data || [])
//             setFilteredData(resp.data || [])
//         })
//     }, [])

//     // Filtering Logic
//     useEffect(() => {
//         let filteredItems = data

//         // 🔎 Filter by name (search input)
//         if (sort) {
//             filteredItems = filteredItems.filter((plant) =>
//                 plant.name?.toLowerCase().includes(sort.toLowerCase())
//             )
//         }

//         // 🔎 Filter by selected categories (checkboxes)
//         if (categories.length > 0) {
//             filteredItems = filteredItems.filter((plant) =>
//                 plant.categories && categories.some(category => plant.categories.includes(category))
//             )
//         }

//         setFilteredData(filteredItems)
//     }, [sort, categories, data])

//     // ✅ Handle Checkbox Selection
//     const handleCheckboxChange = (e) => {
//         const { value, checked } = e.target

//         setCategories(prevCategories =>
//             checked ? [...prevCategories, value] : prevCategories.filter(cat => cat !== value)
//         )
//     }

//     return (
//         <div className='flex'>
//             <div className='flex flex-wrap h-[100vh] gap-5 w-[75%] overflow-auto '>
//                 {
//                     filteredData.length > 0 ? (
//                         filteredData.map((plant, index) => (
//                             <div key={index} className='w-[15%] p-5 border-2 '>
//                                 <p>{plant.name}</p>
//                                 <p>Price: ${plant.price}</p>
//                                 <p>Categories: {plant.categories?.join(", ") || "None"}</p>
//                             </div>
//                         ))
//                     ) : <p>Data not found</p>
//                 }
//             </div>
//             <div className='w-[25%] bg-slate-500 h-[100vh] p-5'>
//                 <form>
//                     <input 
//                         type="text" 
//                         placeholder="Search by name" 
//                         onChange={(e) => setSort(e.target.value)} 
//                         className="p-2 border rounded"
//                     />
//                     <br /><br />

//                     {/* ✅ Checkboxes for Multiple Category Selection */}
//                     <label>
//                         <input 
//                             type="checkbox" 
//                             value="indoor" 
//                             onChange={handleCheckboxChange} 
//                             checked={categories.includes("indoor")} 
//                         />
//                         Indoor
//                     </label>
//                     <br />
//                     <label>
//                         <input 
//                             type="checkbox" 
//                             value="outdoor" 
//                             onChange={handleCheckboxChange} 
//                             checked={categories.includes("outdoor")} 
//                         />
//                         Outdoor
//                     </label>
//                     <br />
//                     <label>
//                         <input 
//                             type="checkbox" 
//                             value="lowMaintenance" 
//                             onChange={handleCheckboxChange} 
//                             checked={categories.includes("lowMaintenance")} 
//                         />
//                         Low-Maintenance
//                     </label>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Filter





// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const Filter = () => {
//     let[data,setData]=useState([])
//     let[sort,setSort]=useState("")
//     let[categories,setCategories]=useState([])
//     let[filteredData,setFilteredData]=useState([])


//      useEffect(()=>{
//         axios.get("http://localhost:4000/plants").then((resp)=>{
//             setData(resp.data)
//             setFilteredData(resp.data)
            
            
//         })
//      },[])
//      console.log(data);

//     //   useEffect(()=>{
//     //   let filteredItems = filteredData.filter((plant)=>{
//     //     //  return plant.categories.map((ele,i)=>{
//     //     //     // return ele.categories == categories
//     //     //     console.log(plant.categories);
            
//     //     //  })
//     //     return plant.categories.includes(sort)
        
        
//     //   })
//     //   console.log(filteredItems);
      
//     //   },[sort])

//     useEffect(() => {
//         let filteredItems = data;
    
//         // 🔎 Filter by search input (sort)
//         if (sort) {
//             filteredItems = filteredItems.filter((plant) =>
//                 plant.name?.toLowerCase().includes(sort.toLowerCase())
//             )
//         }
    
//         // 🔎 Filter by selected categories (checkboxes)
//         if (categories.length > 0) {
//             filteredItems = filteredItems.filter((plant) =>
//                 plant.categories && categories.some(category => plant.categories.includes(category))
//             )
//         }
    
//         setFilteredData(filteredItems);
//     }, [sort, categories, data])

//     const handleCheckboxChange = (e) => {
//         const { value, checked } = e.target

//      let handleCheckbox = (e)=>{
//         setCategories(e.target.value)
//      }
     
//   return (
//     <div className='flex'>
//         <div className='flex flex-wrap h-[100vh] gap-5 w-[75%] overflow-auto '>
//                 {
//                     filteredData.length > 0 && filteredData.length > 0 ? filteredData.map((plant, index) => {
//                         return (
//                             <div key={index} className='w-[15%] p-5  border-2 '>
//                                 <p> {plant.name}</p>
//                                 <p> {plant.price}</p>
//                                 <p> {plant.categories}</p>
//                                 {/* <p> {plant.price}</p> */}
//                             </div>
//                         )
//                     }) : <p>Data not found</p>
//                 }
//             </div>
//      <div className='w-[25%] bg-slate-500 h-[100vh] p-5'>
//                 <form action="">
//                     <input type="text" onChange={(e) => { setSort(e.target.value) }} /> <br /> <br />
//                     <label htmlFor="indoor">Indoor</label>
//                     <input type="checkbox" id='indoor' value="indoor"  onChange={handleCheckboxChange} 
//                             checked={categories.includes("indoor")} />
//                     <label htmlFor="female">outdoor</label>
//                     <input type="checkbox" id='outdoor' value="outdoor"  onChange={handleCheckboxChange} 
//                             checked={categories.includes("outdoor")} />
//                     <label htmlFor="lowMaintenance">Low-Maintenance</label>
//                     <input type="checkbox" id='lowMaintenance' value="lowMaintenance"  onChange={handleCheckboxChange} 
//                             checked={categories.includes("lowMaintenece")} />
//                 </form>
//             </div>
//     </div>
//   )
// }

// export default Filter