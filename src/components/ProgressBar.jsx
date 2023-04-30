import React from 'react'

export const ProgressBar = ({ progress }) => {
    return (
        <div class="progress m-4">
            <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
    )
}
