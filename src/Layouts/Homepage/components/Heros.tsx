import { useOktaAuth } from '@okta/okta-react';
import { Link } from "react-router-dom";
import "./customButton.css";
export const Heros = () => {

    const{authState} =useOktaAuth();

    return (
        <div>
            <div className='d-none d-lg-block'>
                <div className='row g-0 mt-5'>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-left'></div>
                    </div>
                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Share Your Reading List with GeekLib!</h1>
                            <p className='lead'>
                            At GeekLib, we're always interested in what our community is reading. 
                            Whether you're learning a new skill or looking to expand your knowledge, 
                            we want to know what's on your reading list. 
                            By sharing your reading preferences with us, 
                            our library team can recommend the top content that aligns with your interests and goals. 
                            So don't be shy - let us know what you've been reading lately!
                            </p>
                            <p>PS: To use our AI chatbot, please log in to your account first.</p>
                            {authState?.isAuthenticated ?
                                <Link type='button' className="button-90" 
                                    to='search'>Explore top books</Link>         
                                :  
                                <Link className='btn main-color btn-lg text-white' to='/login'>Sign up</Link>
                            }
                        </div>
                    </div>
                </div>

                <div className='row g-0'>
                    <div className='col-4 col-md-4 container d-flex 
                        justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Our collection is always changing!</h1>
                            <p className='lead'>
                                Try to check in daily as our collection is always changing!
                                We work nonstop to provide the most accurate book selection possible
                                for our Luv 2 Read students! We are diligent about our book selection
                                and our books are always going to be our
                                top priority.
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-right'></div>
                    </div>
                </div>
            </div>

            {/* Mobile Heros */}
            <div className='d-lg-none'>
                <div className='container'>
                    <div className='m-2'>
                        <div className='col-image-left'></div>
                        <div className='mt-2'>
                            <h1>Explore a Dynamic Collection at GeekLib</h1>
                            <p className='lead'>
                             At GeekLib, we update our collection regularly to bring you the newest and most relevant books.
                             Check in daily to discover fresh reads and explore our diverse selection of resources. 
                             We take pride in our curated collection and prioritize the reading needs of all our patrons, 
                             from students to avid readers. Rest assured that our books are our top priority, 
                             and we are always working to provide the most accurate and up-to-date selection.
                            </p>
                            <p>PS: To use our AI chatbot, please log in to your account first.</p>
                            {authState?.isAuthenticated ?
                                <Link type='button' className="button-90" 
                                    to='search'>Explore top books</Link>         
                                :  
                                <Link className='btn main-color btn-lg text-white' to='/login'>Sign up</Link>
                            }
                        </div>
                    </div>
                    <div className='m-2'>
                        <div className='col-image-right'></div>
                        <div className='mt-2'>
                            <h1>Explore a Dynamic Collection at GeekLib</h1>
                            <p className='lead'>
                             At GeekLib, we update our collection regularly to bring you the newest and most relevant books.
                             Check in daily to discover fresh reads and explore our diverse selection of resources. 
                             We take pride in our curated collection and prioritize the reading needs of all our patrons, 
                             from students to avid readers. Rest assured that our books are our top priority, 
                             and we are always working to provide the most accurate and up-to-date selection.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}