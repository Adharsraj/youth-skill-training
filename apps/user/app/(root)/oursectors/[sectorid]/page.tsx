import React from 'react';

interface Params {
    sectorid: string;
}

interface IProps {
    params: Params;
}

const SectorTypes: React.FC<IProps> = ({ params }) => {
    console.log("dsdsdsdsdsd", params);
    return (
        <div>
            <p>{params.sectorid}</p>
        </div>
    );
}

export default SectorTypes;
