import React from 'react'

const Table = () => {
  return (
    <>
    <div className="w-9/12">
                <h2 className="text-3xl font-bold" >Education</h2>
                <table className="p-4 m-6 text-xl">
                    <tr className="ml-4">
                        <th className="b p-6 m-4">Qualification</th>
                        <th className=" p-6 m-4">Course</th>
                        <th className=" p-6 m-4">University/Board</th>
                        <th className=" p-6 m-4">College/School</th>
                        <th className=" p-6 m-4">Year of passing</th>
                        </tr>
                    <tr>
                    <td className=" p-6 m-4"> PG Diploma</td>
                    <td className=" p-6 m-4">Blockchain Architect</td>
                    <td className=" p-6 m-4">Digital University Kerala</td>
                    <td className="p-6 m-4">Kerala Blockchain Academy</td>
                    <td className=" p-6 m-4">2024-present</td>
                    </tr>
                    <tr>
                    <td className=" p-6 m-4"> Bachelor of Engineering</td>
                    <td className=" p-6 m-4">Computer Science and Engineering</td>
                    <td className=" p-6 m-4">Anna University</td>
                    <td className=" p-6 m-4">Narayanaguru College of Engineeering</td>
                    <td className=" p-6 m-4">2020</td>
                    </tr>
                    <tr>
                    <td className=" p-6 m-4">HSC</td>
                    <td className="p-6 m-4">Biomaths</td>
                    <td className="p-6 m-4">Kerala state Board</td>
                    <td className="p-6 m-4">NKM HSS DVPM,NTA</td>
                    <td className="p-6 m-4">2016</td>
                    </tr>
                    <tr >
                    <td className="p-6 m-4">SSLC</td>
                    <td className="p-6 m-4">Biomaths</td>
                    <td className="p-6 m-4">Kerala State Board</td>
                    <td className="p-6 m-4">St.thereses Convent,NTA</td>
                    <td className="p-6 m-4">2014</td>
                    </tr>
                </table>
            </div>
    </>
  )
}

export default Table