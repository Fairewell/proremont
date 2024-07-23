import React from "react"
import { useRouteError, Link } from "react-router-dom";

const NotFoundPage = () => 
    {

    return(    
        <section className="flex items-center h-full p-16 text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold font-merriweather lining-nums text-9xl text-gray-400">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold font-raleway font-semibold md:text-3xl">Извините, вы попали на несуществующую страницу.</p>
                    <p className="mt-4 mb-8 text-gray-600 font-raleway font-medium">Но не волнуйтесь! На главной странице вы найдете всё, что вам нужно.</p>
                    <Link to={`/main`} className="transition-all px-8 py-3 rounded-xl hover:text-[18px] font-semibold rounded bg-black hover:bg-[#FF4000] text-gray-50" >Назад на главную</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFoundPage;