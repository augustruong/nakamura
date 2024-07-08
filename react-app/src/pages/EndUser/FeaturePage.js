import React, { useEffect, useState } from "react";
import words from "../../words";
import Feature from "../../components/Feature";
import { motion } from "framer-motion";

export default function FeaturePage(){
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.feature.title;
    }, [])
    return(
        <motion.main
            className="main__container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1}}
        >
            <div id="feature-page" className="mt-nav text-align-ct mb-100">
                <div className="header mb-xl">
                    <div className="title large py-m">{words.terms.feature.my_feature}</div>
                    <p className="w-475px text-align-ct mx-auto">{words.terms.feature.message}</p>
                </div>
                <Feature/>
            </div>
        </motion.main>
    )
}


