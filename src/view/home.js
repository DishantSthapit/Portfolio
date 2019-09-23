import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Banner from '../components/Banner/Banner';
import  AlternateNavBar from '../components/AlternateNavBar/AlternateNavBar';
import MessengerCustomerChat from 'react-messenger-customer-chat';


function Home() {
  return (
    <div>
        <NavBar />
        <AlternateNavBar name="Dishant Man Sthapit" role="Frontend Developer"/>
        <Banner email="mailto:dishantsthapit@gmail.com" phone="tel:0410330140"/>
        <MessengerCustomerChat
          pageId="100958611264690"
          appId="1673419086124866"
          color="red"
          
        />
      </div>
  );
}

export default Home;
