import React, { useState } from "react";

/*
title: string
data: [
    {
    header1: string,
    header2: string,
    header3: number
    },
    {...},...
]
*/
const PricesTable = ({ data }) => {
    return (
        <table className="table-auto bg-gray-250 font-raleway lining-nums font-semibold text-black w-full text-sm text-left rtl:text-right">
            <thead className="py-4 px-4">
                <tr>
                    <th className="py-4 px-4">Наименование услуги</th>
                    <th className="py-4">Единица измерения</th>
                    <th className="py-4">Цена</th>
                </tr>
            </thead>
            <tbody class='rounded-lg'>
                {data.map((item, index) => (
                    <tr key={index} className="py-2 px-2 odd:bg-gray-200 odd:bg-gray-100 rounded-lg">
                        <td className="py-2 px-2">{item.header1}</td>
                        <td className="py-2 px-2">{item.header2}</td>
                        <td className="py-2 px-2">{item.header3}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PricesTable;