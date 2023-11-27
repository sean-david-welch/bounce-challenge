import axios from 'axios';
import express from 'express';

export const getCountryInfo = async (request: express.Request, response: express.Response) => {
  try {
    const { country } = request.params;

    if (!country) {
      return response.status(400).send('Country name is required');
    }

    const apiUrl = `https://restcountries.com/v3.1/name/${encodeURIComponent(country)}`;
    const countryResponse = await axios.get(apiUrl);

    console.log(countryResponse.data);

    return response.status(200).json(countryResponse.data);
  } catch (error) {
    console.error('Error fetching country data:', error);

    if (axios.isAxiosError(error) && error.response) {
      response.status(error.response.status).send(error.response.data);
    } else {
      response.status(500).send('Internal Server Error');
    }
  }
};
