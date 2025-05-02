import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoUrl = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('password');

        // Regular expression pattern for password validation
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!passwordPattern.test(password)) {
           Swal.fire({
            title: 'Password Error!',
            text: "Password must contain at least eight characters, including one uppercase letter, one lowercase letter, and one number.",
            icon: 'error',
            confirmButtonText: 'OK'
          });
           return;
        }
        
        createUser(email, password)
            .then(result => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Register Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  });
                  
                  updateProfile(result.user, {
                    displayName: name, 
                    photoURL: photoUrl
                  });

                  setTimeout(function (){
                    window.location.reload();
                  }, 2000);
                  
                  navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                  });
            });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register - Restika Restaurant</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="md:flex">
                        {/* Left Column - Form */}
                        <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
                            <div className="text-center md:text-left mb-8">
                                <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
                                <p className="mt-2 text-gray-600">Join Restika's culinary community</p>
                            </div>
                            
                            <form onSubmit={handleRegister} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">
                                        Profile Photo URL
                                    </label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            name="photoUrl"
                                            id="photoUrl"
                                            required
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                            placeholder="https://example.com/your-photo.jpg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            required
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                    <p className="mt-2 text-xs text-gray-500">
                                        Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number.
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="terms"
                                        name="terms"
                                        type="checkbox"
                                        required
                                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                        I agree to the <a href="#" className="text-orange-600 hover:text-orange-500">Terms</a> and <a href="#" className="text-orange-600 hover:text-orange-500">Privacy Policy</a>
                                    </label>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-300"
                                    >
                                        Create Account
                                    </button>
                                </div>
                            </form>
                            
                            <p className="mt-8 text-center text-sm text-gray-600">
                                Already have an account?{' '}
                                <Link to="/login" className="font-medium text-orange-600 hover:text-orange-500">
                                    Sign in instead
                                </Link>
                            </p>
                        </div>
                        
                        {/* Right Column - Image */}
                        <div className="md:w-1/2 relative hidden md:block">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-90"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                                alt="Restika Restaurant" 
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-white">
                                <div className="text-center max-w-md">
                                    <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                                    <p className="text-lg mb-8">Create an account to order delicious meals, save your favorites, and enjoy exclusive member benefits.</p>
                                    <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                                            <h3 className="font-bold mb-2">Order Online</h3>
                                            <p className="text-sm">Skip the line and order your favorite dishes directly from our menu.</p>
                                        </div>
                                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                                            <h3 className="font-bold mb-2">Special Discounts</h3>
                                            <p className="text-sm">Members get exclusive access to promotions and limited-time offers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;




