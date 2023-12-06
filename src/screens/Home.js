import React,{useState,useEffect} from "react";
import { useAuth } from "../hooks";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
  const auth = useAuth();

  const [search,setSearch] = useState(" ");
  const [foodData,setFoodData] = useState([]);
  const [foodCategory,setFoodCategory] = useState([]);

  const loadFood = async() =>{
    let response = await auth.allFoodData();
    if(response.success){
      setFoodData(response.data)
    }
  }

  const loadCategory = async() =>{
    let response = await auth.allFoodCategory();
    if(response.success){
      setFoodCategory(response.data)
    }
  }

  useEffect(()=>{
    loadFood();
    loadCategory();
    // eslint-disable-next-line 
  },[])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="container">
      <form className="mx-10 my-1">
        <input className="form-control me-2 mt-2" type="search" placeholder="Search" aria-label="Search" name="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
      </form>
      </div>
      <div>
        {
          foodCategory.length !== 0 ?
          foodCategory.map((cat)=>{
            return(
              <>
                <div className="flex-start fs-3 mx-3 mt-3" key={cat._id}>
                  {cat.CategoryName}  
                  <hr />
                </div>
                <div className="row">
                  {
                    foodData.length !==0 ?
                    foodData.filter((value)=>
                      value.CategoryName === cat.CategoryName && (value.name.toLowerCase().includes(search.toLocaleLowerCase()))
                    )
                    .map((data)=>{
                      return(
                        <div key={data._id} className="col-12 col-md-6 col-lg-3">
                             <Card   foodItem={data} options={data.options[0]} />
                        </div>
                      )
                    })
                    :
                    <div className="container text-center fs-3">No food items</div>
                  }
                </div>

              </>
            )
          })
          : 
         <div className="fs-3 text-center">No categories yet</div>         
        }
      </div>  
  
      <div className="mt-100 text-center">
        <Footer />
      </div>
    </div>
  );
}
