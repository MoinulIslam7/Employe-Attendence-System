import React from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/solid'

const Attendance = () => {
    return (
        <div className='ml-16 mr-16'>
            <div className='flex items-center justify-between py-8'>
                <h1 className='text-4xl text-primary font-bold'>Attendance</h1>
                <div className='flex gap-8'>
                    <button className="btns">Download Report</button>
                    <Cog6ToothIcon className='w-8 h-8 text-primary' />
                </div>
            </div>

            <div className="btn-group">
                <input type="radio" name="options" data-title="1   " className="btn" />
                <input type="radio" name="options" data-title="2" className="btn" />
                <input type="radio" name="options" data-title="3" className="btn" />
                <input type="radio" name="options" data-title="4" className="btn" />
            </div>

            <div className="btn-group">
                <input type="radio" name="options" data-title="1" className="btn" />
                <input type="radio" name="options" data-title="2" className="btn" />
                <input type="radio" name="options" data-title="3" className="btn" />
                <input type="radio" name="options" data-title="4" className="btn" />
            </div>
        </div>
    );
};

export default Attendance;