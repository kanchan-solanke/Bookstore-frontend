import { IconButton } from '@mui/material'
import React from 'react'
import './Image.css'

function Image() {
    return (
        <div>
            <div className='image'>
                <div className='inner-image'>
                    <IconButton>
                        <img id='img'
                            style={{ width: 200, height: 200, margin: 30, borderRadius: 150 }}
                            src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3Afd1a0f72-85bb-467c-9057-6bfc4d749b25&params=version%3A0&token=1663466415_da39a3ee_c1aabb76c13629e357dd0ee032e684bf25b3db58&api_key=CometServer1"></img>
                    </IconButton>

                    <h3> ONLINE BOOKING SHOPPING </h3>
                </div>
            </div>

        </div>
    )
}

export default Image
