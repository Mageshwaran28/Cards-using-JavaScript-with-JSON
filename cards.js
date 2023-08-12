let ObjCon = {
    divEleType : "div",
    eleCls : "container",
    spanEleType : "span",
    spanCls : "txt",
    range : {
        eleCls : "range",
        numGrpCls : "num",
        countCls : "count",
        subRngCls : "sub-range",
        rngLen : "range-length",
        range1:{
            rngCls: "red",
            perCls : "green",
            rngWidth : "r1-width red",
            txt : "Published Project",
            count : "532" ,
            per : "+1.69%" 
        },
        range2:{
            rngCls: "blue",
            perCls : "red",
            rngWidth : "r1-width blue",
            txt : "Completed Task",
            count : "4,569" ,
            per : "-0.5%" 
        },
        range3:{
            rngCls: "green",
            perCls : "green",
            rngWidth : "r1-width green",
            countCls : "count",
            txt : "Successfull Task",
            count : "89%" ,
            per : "+0.99%" 
        },
        range4:{
            rngCls: "orange",
            perCls : "green",
            rngWidth : "r1-width orange",
            txt : "Ongoing Project",
            count : "365" ,
            per : "+0.35%" 
        }
    },
    card:{

    }
}

let Obj = {
    createEle : function( EleType , clsName ){
        let ele = document.createElement(EleType);
        ele.className = clsName;
        return ele;
    },
    createEleTxt : function(EleType , clsName , txt){
        let ele = document.createElement(EleType);
        ele.className = clsName;
        ele.appendChild(document.createTextNode(txt));
        return ele;
    }
}

let conatainer = Obj.createEle(ObjCon.divEleType,ObjCon.eleCls);

    let range = Obj.createEle(ObjCon.divEleType,ObjCon.range.eleCls);

        let range1 = Obj.createEle(ObjCon.divEleType,ObjCon.range.subRngCls);

            let r1_span = Obj.createEleTxt(ObjCon.spanEleType,ObjCon.spanCls,ObjCon.range.range1.txt);

        range1.appendChild(r1_span);

            let num1 = Obj.createEle(ObjCon.divEleType,ObjCon.range.numGrpCls);

                let count1 = Obj.createEleTxt(ObjCon.divEleType, ObjCon.range.countCls , ObjCon.range.range1.count);

            num1.appendChild(count1);

                let per1 = Obj.createEleTxt(ObjCon.divEleType,ObjCon.range.range1.perCls , ObjCon.range.range1.per);

            num1.appendChild(per1);

        range1.appendChild(num1);

            let r1Length = Obj.createEle(ObjCon.divEleType,ObjCon.range.rngLen);

                let r1Width = Obj.createEle(ObjCon.divEleType,ObjCon.range.range1.rngWidth);

            r1Length.appendChild(r1Width);
        
        range1.appendChild(r1Length);

    range.appendChild(range1);
    
        let range2 = Obj.createEle(ObjCon.divEleType,ObjCon.range.subRngCls);

            let r2_span = Obj.createEleTxt(ObjCon.spanEleType,ObjCon.spanCls,ObjCon.range.range2.txt);

        range2.appendChild(r2_span);

            let num2 = Obj.createEle(ObjCon.divEleType,ObjCon.range.numGrpCls);

                let count2 = Obj.createEleTxt(ObjCon.divEleType, ObjCon.range.countCls , ObjCon.range.range2.count);

            num2.appendChild(count2);

                let per2 = Obj.createEleTxt(ObjCon.divEleType,ObjCon.range.range2.perCls , ObjCon.range.range2.per);

            num2.appendChild(per2);

        range2.appendChild(num2);

            let r2Length = Obj.createEle(ObjCon.divEleType,ObjCon.range.rngLen);

                let r2Width = Obj.createEle(ObjCon.divEleType,ObjCon.range.range2.rngWidth);

            r2Length.appendChild(r2Width);
        
        range2.appendChild(r2Length);

    range.appendChild(range2);
    
        let range3 = Obj.createEle(ObjCon.divEleType,ObjCon.range.subRngCls);

            let r3_span = Obj.createEleTxt(ObjCon.spanEleType,ObjCon.spanCls,ObjCon.range.range3.txt);

        range3.appendChild(r3_span);

            let num3 = Obj.createEle(ObjCon.divEleType,ObjCon.range.numGrpCls);

                let count3 = Obj.createEleTxt(ObjCon.divEleType, ObjCon.range.countCls , ObjCon.range.range3.count);

            num3.appendChild(count3);

                let per3 = Obj.createEleTxt(ObjCon.divEleType,ObjCon.range.range3.perCls , ObjCon.range.range3.per);

            num3.appendChild(per3);

        range3.appendChild(num3);

            let r3Length = Obj.createEle(ObjCon.divEleType,ObjCon.range.rngLen);

                let r3Width = Obj.createEle(ObjCon.divEleType,ObjCon.range.range3.rngWidth);

            r3Length.appendChild(r3Width);
        
        range3.appendChild(r3Length);

    range.appendChild(range3);
    
        let range4 = Obj.createEle(ObjCon.divEleType,ObjCon.range.subRngCls);

            let r4_span = Obj.createEleTxt(ObjCon.spanEleType,ObjCon.spanCls,ObjCon.range.range4.txt);

        range4.appendChild(r4_span);

            let num4 = Obj.createEle(ObjCon.divEleType,ObjCon.range.numGrpCls);

                let count4 = Obj.createEleTxt(ObjCon.divEleType, ObjCon.range.countCls , ObjCon.range.range4.count);

            num4.appendChild(count4);

                let per4 = Obj.createEleTxt(ObjCon.divEleType,ObjCon.range.range4.perCls , ObjCon.range.range4.per);

            num4.appendChild(per4);

        range4.appendChild(num4);

            let r4Length = Obj.createEle(ObjCon.divEleType,ObjCon.range.rngLen);

                let r4Width = Obj.createEle(ObjCon.divEleType,ObjCon.range.range4.rngWidth);

            r4Length.appendChild(r4Width);
        
        range4.appendChild(r4Length);

    range.appendChild(range4);
    

conatainer.appendChild(range);

let cardObj = {
    eleType : 'div',
    clsName : 'card',
    head : {
        clsName : 'header',
        head:{
            clsName: 'heading',
            eleType:'h3',
            txt : "What's New"
        },
        imgEle : {
            clsName: 'img',
            eleType : 'img',
            src :'/SVG/left-arrow.svg'
        }
    },
    user_menu :{
        clsName: 'user-grp',
        subClsName : 'sub-user-menu',
        user1:{
            img:{
                eleType: 'img',
                clsName: 'img',
                src : '/images/user.webp'
            },
            details:{
                clsName:'user-details',
                head:{
                    eleType:'h4',
                    clsName:'user-head',
                    txt:'Your Manager Posted.'
                },
                spn:{
                    eleType:'span',
                    clsName:'name',
                    txt:'Jonny michel'
                }
            }
        },
        user2:{
            img:{
                eleType: 'img',
                clsName: 'img svg red',
                src : '/SVG/shotcase.svg'
            },
            details:{
                clsName:'user-details',
                head:{
                    eleType:'h4',
                    clsName:'user-head',
                    txt:'You have 3 pending Task.'
                },
                spn:{
                    eleType:'span',
                    clsName:'name',
                    txt:'Hemilton'
                }
            }
        },
        user3:{
            img:{
                eleType: 'img',
                clsName: 'img svg green',
                src : '/SVG/tick.svg'
            },
            details:{
                clsName:'user-details',
                head:{
                    eleType:'h4',
                    clsName:'user-head',
                    txt:'New Order Received.'
                },
                spn:{
                    eleType:'span',
                    clsName:'name',
                    txt:'Hemilton'
                }
            }
        }
    }
}



    let card = Obj.createEle(cardObj.eleType,cardObj.clsName);

        let header = Obj.createEle(cardObj.eleType,cardObj.head.clsName);

            let head = Obj.createEleTxt(cardObj.head.head.eleType , cardObj.head.head.clsName , cardObj.head.head.txt);

        header.appendChild(head);

            let leftArrow = Obj.createEle(cardObj.head.imgEle.eleType,cardObj.head.imgEle.clsName);
            leftArrow.setAttribute('src',cardObj.head.imgEle.src);

        header.appendChild(leftArrow)

    card.appendChild(header);

        let menu_grp = Obj.createEle(cardObj.eleType , cardObj.user_menu.clsName);

            let user1 = Obj.createEle(cardObj.eleType, cardObj.user_menu.subClsName);

                let head_user = Obj.createEle(cardObj.user_menu.user1.img.eleType , cardObj.user_menu.user1.img.clsName);
                head_user.setAttribute('src',cardObj.user_menu.user1.img.src);

            user1.appendChild(head_user);

                let user1_det = Obj.createEle(cardObj.eleType, cardObj.user_menu.user1.details.clsName);

                    let head1_user = Obj.createEleTxt(cardObj.user_menu.user1.details.head.eleType , cardObj.user_menu.user1.details.head.clsName , cardObj.user_menu.user1.details.head.txt);

                user1_det.appendChild(head1_user);

                    let spn1 = Obj.createEleTxt(cardObj.user_menu.user1.details.spn.eleType , cardObj.user_menu.user1.details.spn.clsName , cardObj.user_menu.user1.details.spn.txt);

                user1_det.appendChild(spn1);

            user1.appendChild(user1_det);

        menu_grp.appendChild(user1);

            let user2 = Obj.createEle(cardObj.eleType, cardObj.user_menu.subClsName);

                let head_user2 = Obj.createEle(cardObj.user_menu.user2.img.eleType , cardObj.user_menu.user2.img.clsName);
                head_user2.setAttribute('src',cardObj.user_menu.user2.img.src);

            user2.appendChild(head_user2);

                let user2_det = Obj.createEle(cardObj.eleType, cardObj.user_menu.user2.details.clsName);

                    let head2_user = Obj.createEleTxt(cardObj.user_menu.user2.details.head.eleType , cardObj.user_menu.user2.details.head.clsName , cardObj.user_menu.user2.details.head.txt);

                user2_det.appendChild(head2_user);

                    let spn2 = Obj.createEleTxt(cardObj.user_menu.user2.details.spn.eleType , cardObj.user_menu.user2.details.spn.clsName , cardObj.user_menu.user2.details.spn.txt);

                user2_det.appendChild(spn2);

            user2.appendChild(user2_det);

        menu_grp.appendChild(user2);

            let user3 = Obj.createEle(cardObj.eleType, cardObj.user_menu.subClsName);

                let head_user3 = Obj.createEle(cardObj.user_menu.user3.img.eleType , cardObj.user_menu.user3.img.clsName);
                head_user3.setAttribute('src',cardObj.user_menu.user3.img.src);

            user3.appendChild(head_user3);

                let user3_det = Obj.createEle(cardObj.eleType, cardObj.user_menu.user3.details.clsName);

                    let head3_user = Obj.createEleTxt(cardObj.user_menu.user3.details.head.eleType , cardObj.user_menu.user3.details.head.clsName , cardObj.user_menu.user3.details.head.txt);

                user3_det.appendChild(head3_user);

                    let spn3 = Obj.createEleTxt(cardObj.user_menu.user3.details.spn.eleType , cardObj.user_menu.user3.details.spn.clsName , cardObj.user_menu.user3.details.spn.txt);

                user3_det.appendChild(spn3);

            user3.appendChild(user3_det);

        menu_grp.appendChild(user3);

            let user4 = Obj.createEle(cardObj.eleType, cardObj.user_menu.subClsName);

                let head_user4 = Obj.createEle(cardObj.user_menu.user1.img.eleType , cardObj.user_menu.user1.img.clsName);
                head_user4.setAttribute('src',cardObj.user_menu.user1.img.src);

            user4.appendChild(head_user4);

                let user4_det = Obj.createEle(cardObj.eleType, cardObj.user_menu.user1.details.clsName);

                    let head4_user = Obj.createEleTxt(cardObj.user_menu.user1.details.head.eleType , cardObj.user_menu.user1.details.head.clsName , cardObj.user_menu.user1.details.head.txt);

                user4_det.appendChild(head4_user);

                    let spn4 = Obj.createEleTxt(cardObj.user_menu.user1.details.spn.eleType , cardObj.user_menu.user1.details.spn.clsName , cardObj.user_menu.user1.details.spn.txt);

                user4_det.appendChild(spn4);

            user4.appendChild(user4_det);

        menu_grp.appendChild(user4);

            let user5 = Obj.createEle(cardObj.eleType, cardObj.user_menu.subClsName);

                let head_user5 = Obj.createEle(cardObj.user_menu.user2.img.eleType , cardObj.user_menu.user2.img.clsName);
                head_user5.setAttribute('src',cardObj.user_menu.user2.img.src);

            user5.appendChild(head_user5);

                let user5_det = Obj.createEle(cardObj.eleType, cardObj.user_menu.user2.details.clsName);

                    let head5_user = Obj.createEleTxt(cardObj.user_menu.user2.details.head.eleType , cardObj.user_menu.user2.details.head.clsName , cardObj.user_menu.user2.details.head.txt);

                user5_det.appendChild(head5_user);

                    let spn5 = Obj.createEleTxt(cardObj.user_menu.user2.details.spn.eleType , cardObj.user_menu.user2.details.spn.clsName , cardObj.user_menu.user2.details.spn.txt);

                user5_det.appendChild(spn5);

            user5.appendChild(user5_det);

        menu_grp.appendChild(user5);

            let user6 = Obj.createEle(cardObj.eleType, cardObj.user_menu.subClsName);

                let head_user6 = Obj.createEle(cardObj.user_menu.user3.img.eleType , cardObj.user_menu.user3.img.clsName);
                head_user6.setAttribute('src',cardObj.user_menu.user3.img.src);

            user6.appendChild(head_user6);

                let user6_det = Obj.createEle(cardObj.eleType, cardObj.user_menu.user3.details.clsName);

                    let head6_user = Obj.createEleTxt(cardObj.user_menu.user3.details.head.eleType , cardObj.user_menu.user3.details.head.clsName , cardObj.user_menu.user3.details.head.txt);

                user6_det.appendChild(head6_user);

                    let spn6 = Obj.createEleTxt(cardObj.user_menu.user3.details.spn.eleType , cardObj.user_menu.user3.details.spn.clsName , cardObj.user_menu.user3.details.spn.txt);

                user6_det.appendChild(spn6);

            user6.appendChild(user6_det);

        menu_grp.appendChild(user6);
    
    card.appendChild(menu_grp);

conatainer.appendChild(card);

document.body.appendChild(conatainer);