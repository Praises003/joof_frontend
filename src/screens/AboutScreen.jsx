import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { FaPencilAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import eventImg from '../assets/ev2.jpg'
import eventImage from '../assets/ev4.jpg'
import christopher from "../assets/christopher.jpg"
import sergio from "../assets/sergio.jpg"
import stefan from "../assets/stefan.jpg"
import jonas from "../assets/jonas.jpg"
import { FaShieldAlt } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa6";
import { FaToilet } from "react-icons/fa6";
import {BsFillCarFrontFill} from 'react-icons/bs'
import {FaRegThumbsUp} from 'react-icons/fa'
import {PiSealCheckFill} from 'react-icons/pi'
import axios from 'axios';



const AboutScreen = () => {
    const [about, setAbout] = useState("ABOUT PROFUSELEMO MULTI-PURPOSE EVENT CENTER")
    const [welcome, setWelcome] = useState("Welcome to Profuselemo Multi-Purpose Event Center")
    const [event, setEvent] = useState("PROF RUFUS OLADIPO ELEMO EVENT CENTER is an ultra-modern event and conference meeting venue with a one-and-half-acre piece of property, uniquely brick built with state-of-the-art facilities within a well-kept vicinity. It is spacious, fully air-conditioned, and highly insulated with the capacity to host up to 1000 guests in banquet settings and 1300 guests in theater settings. This makes it convenient for us to host both corporate and retail events in a serene environment. We can conveniently host weddings, corporate functions, parties, banquets, church services, and more! It further has the capacity to accommodate over 300 cars parked within the premises without obstructing the free flow of traffic along the highway.")
    const [prof, setProf] = useState("PROFESSIONAL SECURITY")
    const [uninter, setUnInter] = useState("UNINTERRUPTED POWER SUPPLY")
    const [room, setRoom] = useState("REST ROOMS")
    const [access, setAccess] = useState("ACCESSIBLE EVENT SPACE WITH GREAT PARKING")
    const [success, setSuccess] = useState("WE ARE HERE TO MAKE YOUR EVENT SUCCESSFUL")
    const [security, setSecurity] = useState("GUARANTEED HIGH SECURITY & ADDED FACILITIES")

    const [textOne, setTextOne] = useState("We offer a first security system to support our clients on their events to ensure a hitch-free event. Arrangements are made to protect the VIPs, their invites as well as ensuring that the assets of our clients and their guests are safe and secured.")
    const [textTwo, setTextTwo] = useState( "We guarantee an uninterrupted power supply for our clients and their guests having our own 200KVA transformer which aids three-phase power supply from the PHCN. A dedicated 400KVA generator that can accommodate all our equipment, lighting, and multimedia facilities conveniently.")
    const [textThree, setTextThree] = useState("We have made adequate provisions for all our guests to be comfortable with both male and female conveniences thoroughly equipped with modern toiletry facilities.")
    const [textFour, setTextFour] = useState("With ramp access & easily reached transportation routes, our event space is highly accessible with lots of parking to ensure that guests can easily locate and attend your event.")
    const [textFive, setTextFive] = useState("Our one universal goal is to ensure that everyone who attends your special event is able to have a fantastic time.")
    const [textSix, setTextSix] = useState("With State of the art surveillance & security personnel and a host of other facilities on site, you stand to get real value for your money when you host events at Noble Castle.")
    const [showForm, setShowForm] = 
    useState(false);
    const [showSecForm, setShowSecForm] = useState(false);
    const [showThdForm, setThdShowForm] = useState(false);
    const [image, setImage] = useState("")
    const [selectedImage, setSelectedImage] = useState(null)
    const [secImg, setSecImg] = useState("")
    const [loading, setLoading] = useState(false)
    const [showImg, setShowImg] = useState(false)
    const[showSecImg, setShowSecImg] = useState(false)
    const { user } = useSelector(state => state.user)

    useEffect(() => {
      const fetchImg = async () => {
        console.log("fetching images")
        await getImage()
        console.log("success")
      }
      fetchImg()
    },[])
    useEffect(() => {
      const fetchImg = async () => {
        console.log("fetching images")
        await getSecImage()
        console.log("success")
      }
      fetchImg()
    },[])
    const handleATextChange = (e) => {
        setAbout(e.target.value);
    };

    const handleWTextChange = (e) => {
        setWelcome(e.target.value);
    };

    const handleETextChange = (e) => {
        setEvent(e.target.value);
    };

    const handlePTextChange = (e) => {
        setProf(e.target.value);
      };

      const handleUTextChange = (e) => {
        setUnInter(e.target.value);
      };

      const handleRTextChange = (e) => {
        setRoom(e.target.value);
      };

      const handleAcTextChange = (e) => {
        setAccess(e.target.value);
      };

      const handleSTextChange = (e) => {
        setSuccess(e.target.value);
      };

      const handleSeTextChange = (e) => {
        setSecurity(e.target.value);
      };

      const handleToTextChange = (e) => {
        setTextOne(e.target.value);
      };

      const handleTtTextChange = (e) => {
        setTextTwo(e.target.value);
      };

      const handleTthTextChange = (e) => {
        setTextThree(e.target.value);
      };

      const handleTfTextChange = (e) => {
        setTextFour(e.target.value);
      };

      const handleTfiTextChange = (e) => {
        setTextFive(e.target.value);
      };

      const handleTsTextChange = (e) => {
        setTextSix(e.target.value);
      };


      
  useEffect(() => {
    const fetchTextData = async () => {
      try {
        const { data } = await axios.get('https://joof-backend.onrender.com/api/texts');
        setAbout(data.about)
        setWelcome(data.welcomeText);
        setProf(data.profText);
        
       
        //setHighly(data.highly)
        setAccess(data.access)
        setSuccess(data.success)
        setRoom(data.room)
        setSecurity(data.security)
        setUnInter(data.uninter)
        setEvent(data.event)
        //setFac(data.fac)
        setTextOne(data.textOne)
        setTextTwo(data.textTwo)
        setTextThree(data.textThree)
        setTextFour(data.textFour)
        setTextFive(data.textFive)
        setTextSix(data.textSix)

      } catch (error) {
        console.log(error);
      }
    };
    fetchTextData();
  }, []);

  const handleUpdateText = async (type) => {
    try {
      setLoading(true);
      let updatedText;
      if (type === 'welcome') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/welcome', { text: welcome });
        setWelcome(updatedText.data.welcomeText);
      }  else if (type === 'about') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/about', { text: about });
        setAbout(updatedText.data.about);
      } 
      // else if (type === 'prov') {
      //   updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/prov', { text: prov });
      //   setProv(updatedText.data.prov);
      // } 
        else if (type === 'ded') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/ded', { text: ded });
        setDed(updatedText.data.ded);
      } else if (type === 'event') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/event', { text: event });
        setEvent(updatedText.data.event);
      } else if (type === 'room') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/room', { text: room });
        setRoom(updatedText.data.room);
      } else if (type === 'security') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/security', { text: security });
        setSecurity(updatedText.data.security);
      } else if (type === 'uninter') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/uninter', { text: uninter });
        setUnInter(updatedText.data.uninter);
      } else if (type === 'highly') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/highly', { text: highly });
        setHighly(updatedText.data.highly);
      } else if (type === 'access') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/access', { text: access });
        setAccess(updatedText.data.access);
      } else if (type === 'success') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/success', { text: success });
       setSuccess(updatedText.data.success);
      } else if (type === 'fac') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/fac', { text: fac });
        setFac(updatedText.data.fac);
      } else if (type === 'textOne') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/textOne', { text: textOne });
        setTextOne(updatedText.data.textOne);
      } else if (type === 'textTwo') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/textTwo', { text: textTwo });
        setTextTwo(updatedText.data.textTwo);
      } else if (type === 'textThree') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/textThree', { text: textThree });
        setTextThree(updatedText.data.textThree);
      } else if (type === 'textFour') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/textFour', { text: textFour });
        setTextFour(updatedText.data.textFour);
      } else if (type === 'textFive') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/textFive', { text: textFive });
        setTextFive(updatedText.data.textFive);
      } else if (type === 'textSix') {
        updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/textSix', { text: textSix });
        setTextSix(updatedText.data.textSix);
      }
      setLoading(false);
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };






     
      const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0])
      }

      const handleImgUpload = async () => {
        if(!selectedImage) {
          console.error('No image selected');
          return;
        }

        const formData = new FormData();

        formData.append("file", selectedImage);

        try {
          const { data } = await axios.post("https://joof-backend.onrender.com/api/upload/imageII", formData)
          console.log(data)
          await getImage()
          setSelectedImage("")
        } catch (error) {
          console.error(error)
        }
      }

      const handleSecImageUpload = async() => {
        if (!selectedImage) { // Check if image is available before using it
          console.error('No image selected');
          return;
        }

       
      
        const formData = new FormData();
       
        formData.append("file", selectedImage);
       
        
        try {
          const {data} = await axios.post("https://joof-backend.onrender.com/api/upload/imageI", formData)
        //setUploadPic(data)
        console.log(data)
        await getSecImage()
        // if (data) {
        //     localStorage.setItem('secImg', JSON.stringify(data?.savedImage?.singleImage?.url))
        // }
        // setImg(data?.savedImage?.singleImage?.url)
        setImage("")
        
        } catch (error) {
          console.error(error)
        }
      
       
               };
  

      const getImage = async() => {
        try {
          setLoading(true)
          const { data } = await axios.get("https://joof-backend.onrender.com/api/upload/imageII")
          console.log(data)
          setImage(data.singleImage.url)
          console.log(image);
          setLoading(false)
        } catch (error) {
          
        }
      }

      
      const getSecImage = async() => {
        try {
          setLoading(true);
          const { data } = await axios.get("https://joof-backend.onrender.com/api/upload/imageI");
    
          setSecImg(data?.singleImage?.url)
           
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }

      }



  return (
    <div>
        {/* <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),url('${image}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "100vh"}} className={` mb-5 relative`}>
             <p className='uppercase text-4xl font-semibold md:text-5xl text-white absolute top-52 md:top-52 md:left-52 text-center'>{about}</p>
        </div> */}


        <div style={{
    position: "relative",
    height: "100vh",
    overflow: "hidden", // Ensures the image doesn't overflow the div
  }} className="mb-5 relative">
  {/* Linear gradient overlay */}
  <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))",
    }}
  ></div>
  
  {/* Image */}
  <img
    src={image} // Set the image URL here
    alt="Background Image"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover", // Ensures the image covers the container
      zIndex: -1, // Push image behind the overlay and content
    }}
  />

  {/* Content */}
  <div style={{
      position: "absolute",
      top: "30%",
      left: "30%",
      transform: "translate(-30%, -50%)",
      textAlign: "",
      zIndex: 1, // Ensure content is above the image and gradient
    }}
  >
    <p className='uppercase text-3xl font-semibold  lg:text-5xl text-white mb-7'>{about}</p>

    <p className="text-white  text-xl lg:text-3xl font-semibold">Owned By Janet Olufunmilayo Oluwasanmi Foundation AGSI</p>
  </div>
</div>




        

        { user && user?.isAdmin ? (<div className="flex items-center justify-center">
      <button onClick={() => setShowForm(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-1/4 block"
      ><div className="flex items-center justify-center">
          <FaPencilAlt size={18}/><p className='text-center'>Edit Banner</p>
        </div></button>

        <button onClick={() => setShowImg(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-1/4 block"
      ><div className="flex items-center justify-center">
          <FaPencilAlt size={18}/><p className='text-center'>Edit Image</p>
        </div></button>

    </div>) : (<></>)}
    {showImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <input type="file" onChange={handleImageChange} 
              className="w-full h-36 mb-4 p-2 border  rounded"
            />
            <div className="flex justify-end">
              <button
                onClick={handleImgUpload}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update Image
              </button>
              <button
                onClick={() => setShowImg(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
            </div>  
              
            </div>
    </div> )}

        <div className=" p-4">
            <p className='text-center text-3xl md:text-4xl font-semibold mb-10'>{welcome}</p>
            <div className="flex flex-col md:flex-row justify-between ">
                {/* <div className="w-full">
                    {<img src={secImg} alt="" className='w-full bg-no-repeat bg-cover'/>}
                </div> */}
                 <div className="lg:w-11/12 ">
                 
                    <img src={secImg} className='s bg-cover bg-no-repeat' alt="" />
                   {user && user.isAdmin ? (<button onClick={() => setShowSecImg(true)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-3/4 block mx-auto mt-3"
                ><div className="flex items-center justify-center">
                    <FaPencilAlt size={18}/><p className='text-center'>Edit Image</p>
                    </div></button>) : (<div></div>)}
                </div> 
                <div className="w-full p-2">
                    <p className="text-lg font-semibold mb-10">
                        {event}</p>
                         {/** second section */}
        {user && user.isAdmin ? (<div className="flex items-center justify-center mb-5">
      <button onClick={() => setShowSecForm(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-3/4 block"
      ><div className="flex items-center justify-center ">
          <FaPencilAlt size={18}/><p className='text-center'>Edit This Section</p>
        </div></button>

    </div>) : (<></>)}

                </div>
            </div>
        </div> 

       


        {/* <div className=" p-4">
            <p className='text-center text-3xl md:text-4xl font-semibold mb-10'>Welcome to Prof Rufus Oladipo Elemo Event Center</p>
            <div className="flex flex-col md:flex-row justify-between ">
                <div className="w-full">
                    <img src={eventImage} alt="" className='w-full bg-no-repeat bg-cover'/>
                </div>
                <div className="w-full p-2">
                    <p className="text-lg font-semibold ">
                        PROF RUFUS OLADIPO ELEMO EVENT CENTER is an ultra-modern event and conference meeting venue with a one-and-half-acre piece of property, uniquely brick built with state-of-the-art facilities within a well-kept vicinity. It is spacious, fully air-conditioned, and highly insulated with the capacity to host up to 1000 guests in banquet settings and 1300 guests in theater settings. This makes it convenient for us to host both corporate and retail events in a serene environment.

                        We can conveniently host weddings, corporate functions, parties, banquets, church services, and more! It further has the capacity to accommodate over 300 cars parked within the premises without obstructing the free flow of traffic along the highway.</p>

                </div>
            </div>
        </div> */}

        <div className="bg-yellow-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
            <div className="w-full shadow-lg  pt-8 px-8 pb-12 rounded-md mb-3">
                <div className="flex md:justify-between items-center py-4 ">
                    <FaShieldAlt size={45} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-4 text-white">{prof}</h1>
                    
                </div>
                <p className="font-medium text-white">
                     {textOne}


                </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex md:justify-between items-center py-4">
                    <FaBatteryFull size={45} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-4 text-white">{uninter}</h1>
                    
                </div>
                <p className="font-medium text-white">
                    {textTwo} 
                    </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex items-center py-4">
                    <FaToilet size={45} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-3 text-white">
                    {room}</h1>
                    
                </div>
                <p className="font-medium text-white">
                     {textThree}                    </p>
            

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex justify-between items-center py-4 ">
                    <BsFillCarFrontFill size={50} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-3 text-white">
                    {access}</h1>
                    
                </div>
                <p className="font-medium text-white">
                   {textFour}
                    </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex justify-between items-center py-4">
                    <FaRegThumbsUp size={50} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-3 text-white">
                    {success}</h1>
                    
                </div>
                <p className="font-medium text-white">
                    {textFive}
                </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex font-bold text-lg pl-3 text-white">
                    <PiSealCheckFill size={60} className='text-blue-900' />
                    <h1 className="ont-bold text-lg">
                        {security}</h1>
                    
                </div>
                <p className="font-medium text-white">
                {textSix}
                </p>

            </div>
          

        </div>

        </div>

                {/** third section */}
              { user && user?.isAdmin ? (<div className="flex items-center justify-center my-5">
            <button onClick={() => setThdShowForm(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-1/4 block"
            ><div className="flex items-center justify-center">
                <FaPencilAlt size={18}/><p className='text-center'>Edit This Section</p>
            </div></button>

                </div>) : (<></>)}

        <div className="">
        <div className=" bg-black py-6 md:p-16 my-3">
            <div className="">
                <p className='text-white  text-center text-2xl md:text-4xl font-semibold mb-5'>What Our Clients are saying</p>
            </div>
      <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      
      spaceBetween={50}
      slidesPerView={1}
      
      autoplay
      navigation
      pagination={{ clickable: true }}
      
     
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        
      <SwiperSlide className=''><div className=" w-10/12  h-96 bg-white shadow mx-auto py-2 px-4">
         <img src={christopher} className='w-28 h-28 rounded-full mx-auto mb-7' alt="" />
         <p className='font-semibold text-lg'>Profuselemo Multi-Purpose Event Center, I love the fact that it was spacious engough for my bridal train to do the bridal dance with me, despite our numerous and glamorous guests. it was totally exciting  </p>
        </div></SwiperSlide>
      <SwiperSlide><div className="w-10/12  h-96  mx-auto bg-white shadow py-2 px-4">
        <img src={sergio} className='w-28 h-28 rounded-full mx-auto mb-7' alt="" />
          <p className='font-semibold text-lg'> How well can express our gratitude to  Profuselemo Multi-Purpose Event Center This event center is world class and their services are top notch. </p>
        </div></SwiperSlide>
      <SwiperSlide><div className="w-10/12 h-96  bg-white shadow mx-auto py-2 px-4">
        <img src={stefan} className='w-28 h-28 rounded-full mx-auto mb-7 py-2 px-4' alt="" />
        <p className='font-semibold text-lg'> No other event center beats  Profuselemo Multi-Purpose Event Center  </p>
        </div></SwiperSlide>
      
    </Swiper>
    </div>
        </div> 

        {/*first section */}
        {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={about}
              onChange={handleATextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                 onClick={() => handleUpdateText('about')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>
           
          </div>
        </div>
      )}

      {/** SecImg */}
      {showSecImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Update Image</h2>
            <input type="file" onChange={handleImageChange} 
              className="w-full h-36 mb-4 p-2 border  rounded"
            />
            <div className="flex justify-end">
              <button
                onClick={handleSecImageUpload}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update Image
              </button>
              <button
                onClick={() => setShowSecImg(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
            </div>  
              
            </div>
    </div> )}


      {/*second section */}
      {showSecForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={welcome}
              onChange={handleWTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleUpdateText('welcome')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowSecForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>
           
          </div>

          {/** */}
          <br></br>

        
          <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={event}
              onChange={handleETextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                //onClick={handleUpdateTextOne}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowSecForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>
           
          </div>
       

        </div>
        
      )}

      {/*third section form*/}
      {showThdForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={prof}
              onChange={handlePTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
               onClick={() => handleUpdateText('prof')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setThdShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>

            <br></br>
            {/** */}

            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={textOne}
              onChange={handleToTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleUpdateText('textOne')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setThdShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>

            <br></br>
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={uninter}
              onChange={handleUTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleUpdateText('uninter')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setThdShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>

            <br></br>

            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={textTwo}
              onChange={handleTtTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                //onClick={handleUpdateTextOne}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setThdShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>

            <br></br>

            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={room}
              onChange={handleRTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleUpdateText('room')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setThdShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>

            <br></br>

            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={textThree}
              onChange={handleTthTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleUpdateText('textThree')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setThdShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>

            <br></br>

            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={access}
              onChange={handleAcTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleUpdateText('access')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setThdShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>
           <br></br>

            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={textFour}
              onChange={handleTfTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleUpdateText('textFour')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setThdShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>
            <br></br>
           
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={success}
              onChange={handleSTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
               onClick={() => handleUpdateText('success')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setThdShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>

            <br></br>

            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={success}
              onChange={handleSTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
               onClick={() => handleUpdateText('success')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setThdShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>
           
                      
           
           
           
           
          

          {/** */}
          <br></br>

        
          
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={textFive}
              onChange={handleTfiTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
              onClick={() => handleUpdateText('textFive')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setThdShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>

            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={security}
              onChange={handleSeTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleUpdateText('security')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setThdShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>

            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={textSix}
              onChange={handleTsTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleUpdateText('textSix')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setThdShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>
           
        </div> 
       

        </div>
        
      )}



    </div>
  )
}

export default AboutScreen