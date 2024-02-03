import { motion } from 'framer-motion'
import React from 'react'
import { Helmet } from 'react-helmet'
export default function Register() {
    return (

        <>
            <Helmet>
                <title>Kayıt Ol</title>
            </Helmet>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <div>Register</div>
            </motion.div>
        </>
    )
}
