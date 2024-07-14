import React from 'react';

const CustomScrollbar = () => {
    return (
        <style>
            {`
                /* Chrome, Edge and Safari */
                *::-webkit-scrollbar {
                    height: 10px;
                    width: 10px;
                }
                *::-webkit-scrollbar-track {
                    border-radius: 9px;
                    background-color: #FFFFFF;
                }
                *::-webkit-scrollbar-track:hover {
                    background-color: #FFFFFF;
                }
                *::-webkit-scrollbar-track:active {
                    background-color: #FFFFFF;
                }
                *::-webkit-scrollbar-thumb {
                    border-radius: 5px;
                    background-color: #E9E9E9;
                    border: 2px solid #FFFFFF;
                }
                *::-webkit-scrollbar-thumb:hover {
                    background-color: #E9E9E9;
                }
                *::-webkit-scrollbar-thumb:active {
                    background-color: #E9E9E9;
                }
            `}
        </style>
    );
};

export default CustomScrollbar;