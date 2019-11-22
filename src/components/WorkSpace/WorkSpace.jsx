import React from 'react';
import './workspace.css'


const WorkSpace = () => {
    return(
        <main>
        <div class="main-header">
           <div class="info">
            <div class="photo">
                <img src="" alt="" />
            </div>
            <p class="name">Vahe Karapetyan</p>
           </div>
           <div class="container">
            
            <input id="modal" type="checkbox"/>
            <label class="modal-button" for="modal">
                <i class="fa fa-fire" aria-hidden="true"></i>
                <span>New Post</span>
            </label>
            <label class="modal-background" for="modal"></label>
        
            
            <div class="modal-content">
                <label class="modal-close" for="modal">&#10005;</label>
                <input type="text" placeholder="title" id="title" />
                <p><textarea name=""  cols="30" rows="10" placeholder="description" id="desc"></textarea></p>
                <label class="modal-content-button" for="modal" id="submBtn">SEND</label>
            </div> 
        </div> 
        </div>
        <section>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </section>
    </main>
    )
}

export default WorkSpace;