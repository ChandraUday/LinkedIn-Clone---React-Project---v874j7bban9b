import React from 'react'
import "./css/widget.css"
import InfoIcon from '@mui/icons-material/Info';

function Widget() {
  return (
    <div className="widget">
        <div className='widget_top'>
             <div className="widget_header">
                  <h4>LinkedIn News</h4>
                  <InfoIcon/>
             </div>
             <div className='widget_body'>
                <ul className="widget_options">
                    <li>
                        <h4>Slaying Job Search fees</h4>
                        <p>6d ago 4,55 readers</p>
                    </li>

                    <li>
                        <h4>A two pizza rule for eating </h4>
                        <p>2d ago 6,15 readers</p>
                    </li>

                    <li>
                        <h4>How to handle workplace breakup</h4>
                        <p>3d ago 4,55 readers</p>
                    </li>

                    <li>
                        <h4>harry leaves for london</h4>
                        <p>6d ago 9,55 readers</p>
                    </li>

                    <li>
                        <h4>Shortest route for miami</h4>
                        <p>1d ago 4,55 readers</p>
                    </li>
                    
                </ul>
             </div>
        </div>



        <div className='widget_bottom'>
             <div className="widget_header">
                  <h4>Todays top courses</h4>
                  <InfoIcon/>
             </div>
             <div className='widget_body'>
                <ul className="widget_options">
                    <li>
                        <h4>Leading world at top</h4>
                        <p>Bill gates</p>
                    </li>

                    <li>
                        <h4>Building Resillience </h4>
                        <p>Mark zukerberg</p>
                    </li>

                    <li>
                        <h4>Critical Thinking for better judgement</h4>
                        <p>3d ago 4,55 readers</p>
                    </li>

                    <li>
                        <h4>harry leaves for london</h4>
                        <p>6d ago 9,55 readers</p>
                    </li>

                    <li>
                        <h4>Shortest route for miami</h4>
                        <p>1d ago 4,55 readers</p>
                    </li>
                    
                </ul>
             </div>
        </div>
    </div>
  )
}

export default Widget
