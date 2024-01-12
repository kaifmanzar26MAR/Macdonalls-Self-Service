import React, { useContext, useEffect, useState } from 'react'
import './place.css'
import MyContext from '../Context/MyContext';
const HomeSelect = () => {
    
    const data=[
        {
            id:1,
            category:"Break fast",
            image:"/image/breakfast.jpeg",
            
            items:[
                {
                    id:101,
                    name:"Burger",
                    imageUrl:"/image/breakfast.jpeg",
                    sub_item:[
                        {
                            id:10101,
                            item_name:"Chiken Burger",
                            imageurl:"/image/breakfast.jpeg",
                            price:"199",
                            btn:"Add",
                            quantity:1,
                            Special_Souce:1,Tomato_Souce:1,McSpicy_Patty:2,cheese:false,added_price:0,
                        },
                        {
                            id:10102,
                            item_name:"Allu Patti Burger",
                            imageurl:"/image/breakfast.jpeg",
                            price:"99",
                            btn:"Add",
                            quantity:1,
                            Special_Souce:1,Tomato_Souce:1,McSpicy_Patty:2,cheese:false,added_price:0,
                        },
                       
                    ]
                    
                },{
                    id:102,
                    name:"Pizza",
                    imageUrl:"/image/breakfast.jpeg",

                }
            ]
        },{
            id:2,
            category:"Meal",
            image:"/image/Meal.jpeg",
            
            items:[
                {
                    id:201,
                    name:"Freanch fries",
                    imageUrl:"/image/Meal.jpeg",
                    
                },{
                    id:202,
                    name:"Chikken wings",
                    imageUrl:"/image/Meal.jpeg"
                }
            ]
        },{
            id:3,
            category:"Lunch",
            image:"/image/lunch.webp",
            items:[
                {
                    id:301,
                    name:"Allu Biryani",
                    imageUrl:"/image/lunch.webp",
                    
                },{
                    id:302,
                    name:"Chikken Biryani",
                    imageUrl:"/image/lunch.webp"
                }
            ]
        },
        {
            id:4,
            category:"Dinner",
            image:"/image/dinner.webp",
            items:[
                {
                    id:401,
                    name:"Roti",
                    imageUrl:"/image/dinner.webp",
                    
                },{
                    id:402,
                    name:"Tadka",
                    imageUrl:"/image/dinner.webp"
                }
            ]
        },{
            id:5,
            category:"Drinks",
            image:"/image/drinks.jpeg",
            items:[
                {
                    id:501,
                    name:"Coktail",
                    imageUrl:"/image/drinks.jpeg",
                    
                },{
                    id:502,
                    name:"Vodka",
                    imageUrl:"/image/drinks.jpeg"
                }
            ]
        },{
            id:6,
            category:"Family Pack",
            image:"/image/familypack.png",
            items:[
                {
                    id:601,
                    name:"Roti+Rice+Chiken",
                    imageUrl:"/image/familypack.png",
                    
                },{
                    id:602,
                    name:"Tadka+Roti+Rice",
                    imageUrl:"/image/familypack.png"
                }
            ]
        }
    ];
    const {paymentMethod}=useContext(MyContext);
    const [displaydata,setDisplaydata]=useState(data[0].items);
    const [heading,setHeading]=useState(data[0].category);
    const [sub_items,setSub_items]=useState(data[0].items[0].sub_item);
    
    const [cartdata,setCartdata]=useState(new Set());
    const [totalprice,setTotalprice]=useState(0);
    const [tax,setTax]=useState(0);
    const [pindata,setPindata]=useState(null);
    // const [additionalstate,setAdditionalstate]=useState({Special_Souce:1,Tomato_Souce:1,McSpicy_Patty:2,cheese:false,added_price:0})
    const addingdatatocart=(e)=>{
        console.log(e);
        if(!cartdata.has(e))
        {
            setTotalprice(Number(totalprice)+Number(e.price));
            setTax(Number(tax)+Math.floor(0.025*Number(e.price)));
        }

        const updatedSet=new Set([...cartdata,e]);
        setCartdata(updatedSet);
        console.log(Array.from(cartdata)[0]);
    }

    const add_additionaldata=()=>{
        const {added_price,Special_Souce,Tomato_Souce,McSpicy_Patty,cheese}=pindata;
        const newsetdata=new Set([...cartdata].map((e)=>{
            if(e.id===pindata.id){
                return {...e,added_price,Special_Souce,Tomato_Souce,McSpicy_Patty,cheese};
            }
            return e;
        }))
        console.log(newsetdata);
        setCartdata(newsetdata);
        document.getElementById('addd').style.display='none';
        setPindata(null);

        // setAdditionalstate({Special_Souce:1,Tomato_Souce:1,McSpicy_Patty:2,cheese:false,added_price:0});
    }

    useEffect(()=>{
        document.getElementById('top_image').style.top='0px';
        document.getElementById('top_image').style.opacity='1';
        document.getElementById('low').style.top='0px';
        document.getElementById('low').style.opacity='1';

    },[])
 
  return (
    <>
      <div className="homeselect_cont">
         <img id='top_image' src="/image/homeselect2.png" alt="image" /> 
        
        
         <div id="low">

        
         <div className="promotions">
            <img src="/image/site_logo.png" alt="image" />
            <h1>{heading}</h1>
            <button onClick={()=>{window.history.back()}} style={{cursor:"pointer"}}>Back</button>
         </div>
        
         <div className="select_cont">
            <div className="side_menue">

                {
                    data.map((e)=>{
                        return(
                           <div className="side_menue_box" id='breakfast' key={e.id} onClick={()=>{setDisplaydata(e.items); setHeading(e.category)}}>
                                <img src={e.image} alt="img" />
                                <h3>{e.category}</h3>
                            </div> 
                        )
                    })
                }
            </div>

            <div className="right_menue">
            {/* all itmes category */}
                <div className="all_items">
                    {
                        displaydata.map((e)=>{
                            return(
                                <div className="side_menue_box" style={{boxShadow:"none"}} key={e.id} onClick={()=>{setHeading(e.name); setSub_items(e.sub_item); document.getElementById('sub_menu').style.display="flex"}}>
                                    <img src={e.imageUrl} alt="image" />
                                    <h3>{e.name}</h3>
                                    
                                </div>
                            )
                        })
                    }

                    {/* All Itmes to add final */}
                    <div id="sub_menu" >
                        <button id='close' onClick={()=>{document.getElementById('sub_menu').style.display="none"; console.log(sub_items.category)}}>X</button>
                        <div className="sub_menu_bar" >
                            {
                                sub_items ? sub_items.map((e)=>{
                                    return(
                                        <div className="side_menue_box final_item_show" style={{boxShadow:"none", cursor:"default"}} key={e.id} >
                                            <img src={e.imageurl} alt="image" />
                                            <h3>{e.item_name}</h3>
                                            <h5>Rs.{e.price}/pc</h5>
                                            <button 
                                            style={{cursor:"pointer", padding:"10px", marginTop:"10px",width:"50%",backgroundColor:"#1c8af1",border:"none",color:"white",borderRadius:"20px"}}
                                            onClick={()=>{addingdatatocart(e)}}
                                            >{e.btn}</button>
                                        </div>
                                    )
                                }) : "No items to show"
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
         </div>


         <div className="total">
            <h1>My Order: {paymentMethod} </h1>
            <h1>Total Tax: ${tax} </h1>
            <h1>Total: ${totalprice + tax}  </h1>
         </div>

        {/* Cart data display section */}
         <div className="lowtab">
           
           {
            
            cartdata.size!==0 ? 
            Array.from(cartdata).map((e)=>{
                console.log(e);
                {/* setTotalprice(totalprice+e.price); */}
                console.log("hiiii")
                const removefood=(ele)=>{
                    const updatedSet = new Set([...cartdata].filter(obj => obj.id !== ele.id));
                    console.log(updatedSet);
                    setCartdata(updatedSet);
                    const taxremove=Math.floor(Number(e.added_price)*0.025);
                    setTax(Number(tax)-Math.floor(0.025*Number(e.price))-taxremove);
                    setTotalprice(Number(totalprice) - Number(e.price) - Number(e.added_price));
                }
                
                return(
                    <div className='xyz'> <div className="remove_food" onClick={()=>removefood(e)}>Remove</div>
                        <div className="side_menue_box hhh" 
                        style={{boxShadow:"none", cursor:"pointer"}} 
                        onClick={()=>{setPindata(e); 
                        console.log(pindata);
                        document.getElementById('addd').style.display="flex";
                        }} key={e.id} >
                            
                            
                            <img src={e.imageurl} alt="image" />
                            <div style={{width:"100%", padding:"10px"}}>
                                <h3>{e.item_name}</h3>
                                <h3>Price: Rs.{e.price}/pc</h3>
                                <h3 >Quantity: {e.quantity} </h3>
                            </div>
                        </div>
                    </div>
                    
                )
            }) :<h2 style={{height:"100px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>No Orders Placed Yet</h2>
           }
         </div>


           {/* Down buttons for place order and cancel it */}

            {
                cartdata.size!==0 ? <div className='buttons'>
                    <div className="cancel_oreder" style={{backgroundColor:"red"}} onClick={()=>{setCartdata(new Set()); setTax(0); setTotalprice(0);}}>
                        Cancel Order
                    </div>
                    <div className="done" style={{backgroundColor:"green"}} onClick={()=>{document.getElementById('ond').style.display="flex"}}>Done</div>
                </div> : ""
            }

            {/* Billing section */}
            <div className="ondone" id='ond'>
                <img src="/image/site_logo.png" alt="logo" />
                <h2 style={{color:"white"}}>Your Eat In Order</h2>
                <div className="ondone_cont">
                    <h3>OrderId: {`${Date.now()}_${Math.floor(Math.random()*200)}`}</h3>
                    {
                        Array.from(cartdata).map((e,i)=>{
                            return(
                                <p key={e.id}>{i}.  {e.item_name} x {e.quantity} @ Rs.{e.price} + addition cheese: {e.cheese? e.added_price : e.added_price} = {(Number(e.price)+Number(e.added_price))*e.quantity}<br/></p>
                            )
                        })
                    }
                    <hr />
                    <h3>Total cost: {totalprice}</h3>
                    <h3>Total tax: {tax}</h3>
                    <hr />
                    <h2>Grand Total : {tax + totalprice}</h2>
                    <br />
                    <button style={{backgroundColor:"green", color:'white'}}>Proceed to Pay</button>
                    <button style={{backgroundColor:"red",color:"white"}} onClick={()=>{document.getElementById('ond').style.display="none"}}>Back</button>
                </div>
            </div>
            </div>


      </div> 
            {/* additional data tap */}
            {pindata ? <div className="additonal" id='addd'>
                <div className="add_con">
                    <div className="inc">
                        <img src="/image/breakfast.jpeg" alt="" />
                        <div>
                            <h2>Customise</h2>
                            <h1>{ pindata.item_name }</h1>
                        </div>
                    </div>
                    <div className="inc">
                        <div className="add_btn" onClick={()=>{setPindata({...pindata,Special_Souce:(pindata.Special_Souce>=2 ? pindata.Special_Souce : pindata.Special_Souce+1)})}}>+</div>
                        <div className="add_btn" onClick={()=>{setPindata({...pindata,Special_Souce:(pindata.Special_Souce<=0 ? pindata.Special_Souce : pindata.Special_Souce-1)})}}>-</div>
                        <div className="show_val">{pindata.Special_Souce}</div>
                        <label >Special Souce</label>
                    </div>
                    <div className="inc">
                        <div className="add_btn" onClick={()=>{setPindata({...pindata,Tomato_Souce:(pindata.Tomato_Souce>=2 ? pindata.Tomato_Souce : pindata.Tomato_Souce+1)})}}>+</div>
                        <div className="add_btn" onClick={()=>{setPindata({...pindata,Tomato_Souce:(pindata.Tomato_Souce<=0 ? pindata.Tomato_Souce : pindata.Tomato_Souce-1)})}}>-</div>
                        <div className="show_val">{pindata.Tomato_Souce}</div>
                        <label >Tomato Souce</label>
                    </div>
                    <div className="inc">
                        <div className="add_btn" onClick={()=>{setPindata({...pindata,McSpicy_Patty:(pindata.McSpicy_Patty>=2 ? pindata.McSpicy_Patty : pindata.McSpicy_Patty+1)})}}>+</div>
                        <div className="add_btn" onClick={()=>{setPindata({...pindata,McSpicy_Patty:(pindata.McSpicy_Patty<=1 ? pindata.McSpicy_Patty : pindata.McSpicy_Patty-1)})}}>-</div>
                        <div className="show_val">{pindata.McSpicy_Patty}</div>
                        <label >McSpicy Patty</label>
                    </div>
                    <br />
                    <h1>Additonal Ingredients</h1>
                    <div className='inc'>
                        <div className="show_val" onClick={()=>{ 
                            {pindata.cheese ? setTax(Number(tax)-Math.floor(0.025*30)) : setTax(Number(tax)+Math.floor(0.025*30))};
                            {pindata.cheese ? setTotalprice(Number(totalprice) - 30) : setTotalprice(Number(totalprice) + 30)};
                            setPindata({...pindata,added_price:(pindata.cheese? 0 : 30),
                            cheese: (pindata.cheese ? false :true)});

                        }}>{pindata.cheese ? "✅" : ""}</div>
                        <label>Cheese (+Rs 30)</label>
                    </div>
                    <button style={{width:"100%", fontSize:"20px",padding:"10px",borderRadius:"20px",border:"none",backgroundColor:"green", color:"white",cursor:"pointer"}}
                    onClick={()=>add_additionaldata()}>Done</button>
                </div>
            </div>: <h2></h2>}
    </>
  )
}

export default HomeSelect
