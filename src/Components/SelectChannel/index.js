import React from 'react';
import Select from '../../Asset/select-channel.png';

const SelectChannel = () => {
	return (
		<div className='select-channel'>
			<img src={Select} alt='' />
			<p>Select a channel</p>
		</div>
	);
};

export default SelectChannel;
