import React, { useState } from 'react'
import Login_bg from '../../assets/images/Login_bg.jpg';
import Logo from '../../assets/images/Logo.png';
import skaplink from '../../assets/images/skaplink.png';
import './Login.css'
import { useAuth } from '../../store/authContext'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState();
    const { login } = useAuth();

    const containerStyle = {
        backgroundImage: `url(${Login_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundColor:'blue',
        height: 'max-content',
        overflow : 'auto'
    };

    const handleAuth = async() => {

        login("dfsdfsdfsdf", 1, "Test");
        return;


        try {
            const response = await fetch('backend/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
            });
      
            if (!response.ok) {
              throw new Error('Invalid credentials');
            }
      
            const result = await response.json();
           
            if (result.token) {
                login(result.token, result.data.id, result.data.first_name);
            }
      
            

          } catch (error) {
            setErrorMsg(error.message);
            console.error('Login failed:', error.message);
          }




    }
    return (

        <div style={containerStyle} className='d-flex'>

            <div className="container-fluid " >
                <div className="row " style={{ height: '100vh' }}>
                    <div className="col-lg-8 col-sm-0"></div>
                    <div className="col-lg-4 d-flex flex-column justify-content-center " >

                        <div className="container align-self-center responsiveContainer " style={{ backgroundColor: '#FFFAF0', marginBottom: '10px', borderRadius: '15px', alignItems: 'center', textAlign: 'center', padding: '20px', width: '55%' }}>

                            <div className="row">
                                <div className="col-4">Total Project</div>
                                <div className="col-4">Ongoing Project</div>
                                <div className="col-4">Completed Project</div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-4" style={{ fontWeight: 'bold', fontSize: '25px' }}>5</div>
                                <div className="col-4" style={{ fontWeight: 'bold', fontSize: '25px' }}>5</div>
                                <div className="col-4" style={{ fontWeight: 'bold', fontSize: '25px' }}>0</div>
                            </div>


                        </div>

                        <div className="container align-self-center responsiveContainer" style={{ backgroundColor: '#FFFAF0', borderRadius: '15px', alignItems: 'center', textAlign: 'center', padding: '20px', width: '55%' }}>
                            <div className="">
                                <img src={Logo} alt="Logo" style={{ width: '9rem', marginBottom: '0.5rem' }} />
                                <div className='' style={{ fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '700' }}>Assam Industrial Infrastructure</div>
                                <div style={{ fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }} >Development Corporation</div>
                                <p className="text-sm text-gray-600" style={{ color: 'rgb(113 128 150)' }}>Project Management and Monitoring System</p>
                            </div>

                            <div>
                                <div className="mb-4 mt-2 " >
                                    <input onChange={(e) => setEmail(e.target.value)} type="text" id="username" name="username" placeholder="Email or Username" className='mt-1 px-4 py-2 block w-100 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
                                </div>
                                <div className="mb-4">
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Password" className="mt-1 px-4 py-2 block w-full w-100 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                {errorMsg && <div style={{color: 'red'}}>{errorMsg}</div> }
                                <div name="login" className="w-full px-12 py-2 bg-orange-500 rounded-md justify-center items-center gap-2.5 inline-flex mt-8 cursor-pointer " >

                                    <button type="button" onClick={handleAuth} className="btn btn-secondary btn-lg" style={{ backgroundColor: 'rgb(237 137 54)', width: '100%' }}>Login</button>
                                </div>

                                
                            </div>


                        </div>

                        <div className="container align-self-center responsiveContainer" style={{ backgroundColor: '#FFFAF0', marginTop: '10px', borderRadius: '15px', alignItems: 'center', textAlign: 'center', padding: '20px', width: '55%' }}>
                            <div>
                                Powered by
                            </div>
                            <img src={skaplink} alt="Logo" className="h-2 mb-3 mt-3" style={{ width: "70%" }}></img>
                        </div>



                    </div>
                </div>
            </div>

        </div >
    );
};


export default Login