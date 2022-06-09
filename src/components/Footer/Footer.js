import React from 'react';

const Footer = () => {
    const today = new Date ()
    const year = today.getFullYear()
    return (
       <section>
           <div className="container mx-auto">
               <hr />
              <div className='pt-11 pb-11'>
                  <h1 className="text-center">&copy; <span className='font-medium text-secondary'>copyright </span>/{ year}|| designed by <span className='text-primary font-medium'>Arifa akter choity</span> </h1>
              </div>
           </div>
       </section>
    );
};

export default Footer;