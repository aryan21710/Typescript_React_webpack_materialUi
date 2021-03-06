import React, { useEffect } from 'react';
import axios from 'axios';
import { ICone } from '../common/interfaces';
import { APIURL } from '../common/constants';

/**
 * This is the Description of this Custom Hook.
 *
 * This will fetch API Data and will populate cone Data.
 *
 * @function useFetchApiData
 *
 *  @param {Object} setCone
 *
 *  @param {number} riskLevel
 *
 *  @param {Array} setCones
 *
 */

export const useFetchApiData = async (
    setCone: React.Dispatch<React.SetStateAction<ICone>>,
    riskLevel: number,
    setCones: React.Dispatch<React.SetStateAction<ICone[]>>
): Promise<void> => {

    useEffect(() => {fetchApiData();
    }, [riskLevel]);

    const fetchApiData = async () => {
        try {
            const response = await axios.get(APIURL);
            if (response) {
                const filteredCone: ICone = response.data.filter(
                    (cone: { riskLevel: number }) => cone.riskLevel === riskLevel
                )[0];
                setCone({ ...filteredCone });
                setCones([...response.data]);
            }
        } catch (err) {
            alert(err);
        }
    };
};
