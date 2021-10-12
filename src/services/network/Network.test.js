
import mockAxios from 'jest-mock-axios';
import { request } from './Network.service';
import { articles } from './__mocks__/axios';

 test('request api get and test base URL', () => {
    const method = 'get';
    const endpoint = '/api/v2/test/';
    // simulating a server response
    request(method, endpoint);
    expect(mockAxios.create).toHaveBeenCalledWith({"baseURL": "https://th-api-backend.herokuapp.com/api/v1", "timeout": 1500});
  });


  /**
 * TODO: test all methods mocking Axios and simulate 
 * Success GET requests  
 * Failed GET requests 
 * Success POST requests  
 * Failed POST requests 
 * Success DELETE requests  
 * Failed DELETE requests 
 */
