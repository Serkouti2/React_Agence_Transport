import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import DataTableVehicules from './DataTableVehicules';

function ShowVehicule() {


    const id = useParams();

   
   
  return (
    <div className='container mt-4'>
        <DataTableVehicules id={id}/>
    </div>
  )
}

export default ShowVehicule