import React from 'react';

const About = () => {
    return (
        <div>
            
            {/*      tailwind daisyui table      */}

            <div className='ml-28 mr-28' >
                <h4 className='mt-10' style={{fontWeight:'bold'}}>Loyal Digital platform Limited</h4>
                One of the largest retail chain stores for Digital in Bangladesh. Laptops Parts are Our main product. Besides, Loyal Digital platform Limited provide product-related services. We have branches in Dhaka Bhaban, Narsingdi Rampura, Gazipur Chumohoni, Dhaka Madaripur, Sibpur Masimpur, Dhaka Gandaria, Chattogram-Agrabad, Chattogram-GEC Circle, Bogura, Rangpur, Mymensingh, Barisal, Rajshahi and Khulna.

                <p className='mt-8 pb-8'>Other Concerns of Loyal Digital platform Limited</p>

                <p>Loyal Digital platform Limited Archives Limited, The Pioneer digital archive house of Bangladesh, grabbing largest amount of data every moment from print and electronic media and the leading service provider for media monitoring as well as.</p>

            </div>

            <div class="overflow-x-auto mb-10 mt-10">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Our Management</th>

                        </tr>
                        <tr>
                            <th></th>
                            <th>Chairman: Tanveer Bhuiyan</th>

                        </tr>
                        <tr>
                            <th></th>
                            <th>Managing Director: Tanjina Afruj</th>

                        </tr>
                        <tr>
                            <th></th>
                            <th>Director: Tamim Bhuiyan</th>

                        </tr>

                    </thead>
                </table>
            </div>

        </div>
    );
};

export default About;