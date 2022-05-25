import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='ml-16 mr-16'>
            <div class="overflow-x-auto mt-10 mb-10">
                <table class="table w-full">
                    {/* <!-- head --> */}
                   
                        <tr style={{fontWeight:'bolder'}}>
                            <th></th>
                            <td>Name: Md. Tauhidul Islam Bhuiyan</td>
                            <td>Email: mdtauhidulislam509@gmail.com</td>

                        </tr>
                   

                </table>
            </div>



            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>EDUCATIONAL QUALIFICATIONS </th>
                            <th>Year</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>1</th>
                            <td>B.Sc in Computer Science and
                                Engineering
                                East West University, Dhaka
                                CGPA: 3.12</td>
                            <td>2016 -2021</td>

                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr class="hover">
                            <th>2</th>
                            <td>Higher Secondary Certificate
                                Urea Sar Karkhana College,
                                Palash, Narsingdi
                                Group-Science
                                GPA: 3.75</td>
                            <td>2015 </td>

                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <th>3</th>
                            <td>Secondary School Certificate
                                Khanepur High School,
                                Palash, Narsingdi
                                Group-Science
                                GPA: 4.63</td>
                            <td>2013</td>

                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='mt-16 mb-16'>
                <table>
                    <tr>
                       <th> </th>
                        <td style={{fontWeight:'bolder'}}>TECHNICAL SKILLS</td>
                        <td style={{fontWeight:'bolder'}} className='pl-16'>Programming and Scripting
                            Language: HTML,
                            CSS, Bootstrap, Tailwind,
                            JavaScript, React.js, Node.js, JSON
                            <br></br>
                            Database: MySQL, MongoDB
                            <br></br>
                            Tools: Visual Stdio Code,
                            Github, Gitbash
                            <br></br>
                        </td>

                    </tr>
                </table>
            </div>


            <div class="overflow-x-auto mb-10 mt-10">
                <table class="table w-full">
                    {/* <!-- head --> */}
                   
                        <tr>
                            <th></th>
                            <th>ACADEMIC PROJECTS Link</th>

                        </tr>
                        <tr>
                            <td style={{fontWeight:'bolder'}}>1.Inventory Management System</td>
                            <td style={{fontWeight:'bolder', color:'blue'}}><a href='https://assignment-11-warehouse.web.app/' target="_blank">https://assignment-11-warehouse.web.app/</a></td>

                        </tr>
                        <tr>
                            <td style={{fontWeight:'bolder'}}>2. Photography Services Website</td>
                            <td style={{fontWeight:'bolder', color:'blue'}}><a href='https://regal-moxie-a06e7c.netlify.app/' target="_blank">https://regal-moxie-a06e7c.netlify.app/</a></td>

                        </tr>
                        <tr>
                            <td style={{fontWeight:'bolder'}}>3.Car Reviews Site</td>
                            <td style={{fontWeight:'bolder', color:'blue'}}><a href='https://famous-rabanadas-78b3d4.netlify.app/' target="_blank">https://famous-rabanadas-78b3d4.netlify.app/</a></td>

                        </tr>
                       
                    
                </table>
            </div>

        </div>
    );
};

export default MyPortfolio;