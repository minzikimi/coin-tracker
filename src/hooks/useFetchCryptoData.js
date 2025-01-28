import { useState,useEffect } from "react";

function useFetchCryptoData(url){

    async function getCryptoData(){
        try{

        }
        catch(error){
            console.error("error fetching data", error);
        }
    }

    useEffect (()=> {getCryptoData()}
    , [url])


}