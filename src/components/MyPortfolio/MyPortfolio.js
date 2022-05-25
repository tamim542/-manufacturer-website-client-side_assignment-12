import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='ml-16 mr-16'>
            <div class="overflow-x-auto mt-10 mb-10">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <td>Name: Md. Tauhidul Islam Bhuiyan</td>
                            <td>Email: mdtauhidulislam509@gmail.com</td>

                        </tr>
                    </thead>

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

            <div>
                <table>
                <tr>
                            <th>3</th>
                            <td>Secondary School Certificate
                                Khanepur High School,
                                Palash, Narsingdi
                                Group-Science
                                GPA: 4.63</td>
                            <td>2013</td>

                        </tr>
                </table>
            </div>

        </div>
    );
};

export default MyPortfolio;