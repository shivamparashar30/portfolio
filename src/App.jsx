import './App.css'
import Profile from './assets/Photo.png'
import Project1 from './assets/Project11.png'
import Project2 from './assets/Project22.png'
import Project3 from './assets/Project333.png'
import Project4 from './assets/Project33.png'
import LinkedIn from './assets/linkedin.svg'
import Facebook from './assets/facebook.svg'
import Instagram from './assets/instagram.svg'
import Github from './assets/github.svg'
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <>
    <header>
     <div className='container m-auto px-4 py-6'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='font-bold text-xl'>Shivam Portfolio</h1>
        </div>
        <div>
          {/* <ul className='flex gap-4'>
            <li>
              <a className='text-gray-400 hover:text-white cursor-pointer'> Projects</a>
            </li>
            <li>
              <a className='text-gray-400 hover:text-white cursor-pointer'> Technologies</a>
            </li>
            <li>
              <a className='text-gray-400 hover:text-white cursor-pointer'> About_me</a>
            </li>
          </ul> */}
          <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
              </ul>
        </div>
      </div>
     </div>
     </header>
     <main>
      {/* Intro/banner section */}
      <section>
        <div className='container m-auto px-4 py-10 flex gap-6'>
          <div>
            <h1 className='font-bold text-4xl'>Hello, I'm Shivam</h1>
            <h1 className='font-bold text-2xl mt-3 gradiant-text'>React Native Developer.</h1>
          
            
            <p className='mt-4 text-gray-400' >I am a Skilled React Native Developer specializing in creating efficient, user-friendly mobile applications with a focus on community engagement.</p>
          </div>
          <div className='relative'>
            <img className='relative border-cyan-600' style={{borderRadius:'60%',  borderBottomColor:'violet'}} src={Profile} width={300} height={250} />
          </div>
          
        </div>
      </section>
      {/* projects */}
      <section section id="projects">
        <div className='container m-auto px-4'>
          <h2 className='text-2xl font-semibold'>Projects</h2>
          {/* Project 1 and 2 */}
          <div className='flex gap-16 mt-11 justify-center  '>
            <div className=' border rounded-md p-5 '>
              <img className='flex justify-center h-auto' src={Project1}  width={480} />
              <h3 className='text-lg font-semibold mt-8'>All In One Donation App</h3>
              <p className='text-gray-400 text-sm mt-2'>Streamlines donations using React Native, MongoDB, Node.js<br/> and Express.js.</p>
              <div className='flex  justify-center mt-2'>
                <button  onClick={() => window.location.href = "https://github.com/shivamparashar30/AIOD-FrontEnd"}
                 className=' px-5 py-2 border rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover: from-blue-700 hover:to-cyan-700'>Checkout</button>
              </div>
            </div>


            <div className=' border rounded-md p-5'>
            <img className='flex justify-center h-auto ' src={Project2} width={480} />
            <h3 className='text-lg font-semibold mt-8'>Furniture Ecommerce</h3>
              <p className='text-gray-400 text-sm mt-2'>Furniture E-commerce Store, built with React Native, MongoDB, Node.js <br/> and Express.js.</p>
              <div className='flex  justify-center mt-2'>
                <button onClick={() => window.location.href = "https://github.com/shivamparashar30/FurnitureApp-FrontEnd"}
                 className=' px-5 py-2 border rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover: from-blue-700 hover:to-cyan-700'>Checkout</button>
              </div>
            </div>

          </div>

        {/* Project 3 and 4 */}

        <div className='flex gap-16 mt-11 justify-center  '>
            <div className=' border rounded-md p-5  '>
              <img className='flex justify-center h-auto ' src={Project3}  width={460} />
              <h3 className='text-lg font-semibold mt-4'>Text Utils App</h3>
              <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS layout for landing page for front-end developer.</p>
              <div className='flex  justify-center mt-5'>
                <button onClick={() => window.location.href = "https://github.com/shivamparashar30/textutils"}
                className=' px-5 py-2 border rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover: from-blue-700 hover:to-cyan-700'>Checkout</button>
              </div>
            </div>


            <div className=' border rounded-md p-5'>
            <img className='flex justify-center h-auto ' src={Project4} width={480} />
            <h3 className='text-lg font-semibold mt-8'>Food Ordering App</h3>
              <p className='text-gray-400 text-sm mt-2'>Food Ordering App using React Native and MongoDB.</p>
              <div className='flex  justify-center mt-5'>
                <button onClick={() => window.location.href = "https://github.com/shivamparashar30/Food-order-app"}
                className=' px-5 py-2 border rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover: from-blue-700 hover:to-cyan-700'>Checkout</button>
              </div>
            </div>

          </div>

        </div>
        
        {/* Technologies */}
        <section className='mt-12' id="technologies">
        <div className='container m-auto px-4 mt-12'>
          <h2 className='text-2xl font-semibold'>Technologies</h2>
          {/* tech-1 */}
          <div className='mt-14'>
            <div className='flex justify-between'>
              <h2 className='text-lg font-semibold'>HTML</h2>
              <p className='text-gray-500'>Advanced</p>
            </div>
            <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to bg-cyan-500 block rounded-md'>

            </span>
          </div>
          {/* tech-2 */}
          <div className='mt-8'>
            <div className='flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>CSS, Bootstrap &  Tailwind</h2>
              <p className='text-gray-500'>Proficient</p>
            </div>
            <span className='w-[95%] h-2 mt-2 bg-gradient-to-t from-blue-500 to bg-cyan-500 block rounded-md'>

            </span>
          </div>
          {/*tech-3 */}

          <div className='mt-8'>
            <div className='flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>JavaScript, Java, C++, Python</h2>
              <p className='text-gray-500'>Proficient</p>
            </div>
            <span className='w-[95%] h-2 mt-2 bg-gradient-to-t from-blue-500 to bg-cyan-500 block rounded-md'>

            </span>
          </div>

          {/* tech-4 */}
          <div className='mt-8'>
            <div className='flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>UI design in Figma</h2>
              <p className='text-gray-500'>Advanced</p>
            </div>
            <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to bg-cyan-500 block rounded-md'>

            </span>
          </div>
          {/* tech-5 */}
          <div className='mt-8'>
            <div className='flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>React Native</h2>
              <p className='text-gray-500'>Advanced</p>
            </div>
            <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to bg-cyan-500 block rounded-md'>

            </span>
          </div>
          {/* tech-6 */}
          <div className='mt-8'>
            <div className='flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>React Js</h2>
              <p className='text-gray-500'>Proficient</p>
            </div>
            <span className='w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to bg-cyan-500 block rounded-md'>

            </span>
          </div>
          {/* tech-7 */}
          <div className='mt-8'>
            <div className='flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>MongoDB</h2>
              <p className='text-gray-500'>Intermediate</p>
            </div>
            <span className='w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to bg-cyan-500 block rounded-md'>

            </span>
          </div>
          {/* tech-8 */}
          <div className='mt-8'>
            <div className='flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>Express Js</h2>
              <p className='text-gray-500'>Beginner</p>
            </div>
            <span className='w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to bg-cyan-500 block rounded-md'>

            </span>
          </div>



          </div>
          
        </section>

        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Github
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  VS Code
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Postman
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick learning
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Engagement
                </p>
              </div>
              
            </div>
          </div>
        </section>


        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
                <p>
                Completed BCA - Bachelor of Computer Applications from Aryan College Ajmer.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>
                Completed MCA - Master of Computer Applications from PES University Bangalore.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">Now</h3>
                <p>
                Started focusing on Frontend Development to build a developer's career.
                </p>
              </div>
              
            </div>
          </div>
        </section>
      </section>
     </main>
     <footer className='md-8'>
        <div className="container m-auto flex justify-between px-12 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2023</p>
          </div>
          <div>
            <ul className="flex gap-4">
            <li>
            <a href="https://github.com/shivamparashar30" target="_blank" rel="noopener noreferrer">
            <img src={Github} className="w-5 bg-white rounded-xl" />
          </a>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/shivamparashar30/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} className="w-5" />
          </a>
              </li>
              
            </ul>
          </div>
        </div>
        {
        scrolling && (
          <div className='md-6 flex justify-center'>
          <button className="right-5 top-6  bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} />
          </button>
          </div>
        )
      }
      </footer>
      
    </>
  )
}

export default App

