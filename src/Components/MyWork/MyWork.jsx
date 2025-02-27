import React from 'react';
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import my_work from "../../assets/mywork_data";
import arrow from "../../assets/arrow_icon.svg"

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My latest work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {my_work.map((work, index) => {
                    return <div className='my-work-container-inner'><img key={index} src={work.w_img} alt="" />
                        <div className="link-buttons">
                            <button className='link-button'><a href={work.w_git_link}>Github</a></button>
                            <button className='link-button'><a href={work.w_live_link}>Live Preview</a></button>
                        </div>
                    </div>
                })}

            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow} alt="" />
            </div>
        </div>
    )
}

export default MyWork