import { useEffect, useState } from "react"
import Feature from "./component/Feature/Feature"
import Banner from "./component/Header/Banner/Banner"
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';




function App() {
  const notify = () => toast("Credit Added to Your Account!");
 const notice=()=>toast("All Ready Add this Player")
 const Addsu=()=>toast("Add successfully")
 const  Delete=()=>toast('Delete SuccessFully')

 const [save,setSave]=useState([])
  const [isActive,setActive]=useState({
    cart:true,
    status:"cart"
  })
  
  const handleActive=status=>{

    if(status === "cart"){
      setActive({
        cart:true,
        status:'cart'
      })
    }
    else{
      setActive({
        cart:false,
        status:"about"
      })
    }
  }
  console.log(isActive);
  
  // navbar handle click start
  const [coin, setCoin] = useState(0);
  const handleClaim=()=>{
 setCoin((money)=>money+20000)

    notify()
   
  }

  // end

  // save data start


  
 const handleDelete=id=>{
 const remove=save.filter(idx=>idx.id !==id)
 setSave(remove)

  
  

 }
 
 
  const handleSave=(playerInfo)=>{
  
  
    if(save.includes(playerInfo) ){
      notice()
      return;
    } 

    if (save.length === 6) {
      toast.warning("You can't select more than 6 players", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    
    if (playerInfo.Price > coin) { // Check if player price exceeds available coins
      toast.warning("You can't enough money", {
        position: "top-center",
        autoClose: 2000,
      });
     
    }
    
     
     
    
   
      
      else {
        const newData=[...save,playerInfo];
      
      setSave(newData);
      setCoin((prevCoin) => prevCoin- playerInfo.Price)
      //  myMoney = Math.max(myMoney - chocolatePrice, 0);
    
      
      Addsu()
      }
     
  
  
    }
   
  
  // save data end
  const [Players,setPlayers]=useState([]);
    useEffect(()=>{

        fetch('player.json')
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    },[])

  
  return (
    <>
      <Header coin={coin} ToastContainer={ToastContainer}></Header>
      <Banner handleClaim={handleClaim} ></Banner>
     
      <Feature handleDelete={handleDelete}   save={save} handleSave={ handleSave} Players={Players} isActive={isActive} handleActive={handleActive}></Feature>
      <Footer></Footer>
    </>
  )
}

export default App
