gdjs.OptionsCode = {};
gdjs.OptionsCode.GDCloseButtonObjects1= [];
gdjs.OptionsCode.GDCloseButtonObjects2= [];
gdjs.OptionsCode.GDCloseButtonObjects3= [];
gdjs.OptionsCode.GDHydrophobicCheatObjects1= [];
gdjs.OptionsCode.GDHydrophobicCheatObjects2= [];
gdjs.OptionsCode.GDHydrophobicCheatObjects3= [];
gdjs.OptionsCode.GDMoonJumpCheatObjects1= [];
gdjs.OptionsCode.GDMoonJumpCheatObjects2= [];
gdjs.OptionsCode.GDMoonJumpCheatObjects3= [];
gdjs.OptionsCode.GDPlusButtonObjects1= [];
gdjs.OptionsCode.GDPlusButtonObjects2= [];
gdjs.OptionsCode.GDPlusButtonObjects3= [];
gdjs.OptionsCode.GDMinusButtonObjects1= [];
gdjs.OptionsCode.GDMinusButtonObjects2= [];
gdjs.OptionsCode.GDMinusButtonObjects3= [];
gdjs.OptionsCode.GDVolumeLevelObjects1= [];
gdjs.OptionsCode.GDVolumeLevelObjects2= [];
gdjs.OptionsCode.GDVolumeLevelObjects3= [];
gdjs.OptionsCode.GDOptionsMenuObjects1= [];
gdjs.OptionsCode.GDOptionsMenuObjects2= [];
gdjs.OptionsCode.GDOptionsMenuObjects3= [];
gdjs.OptionsCode.GDBackgroundObjects1= [];
gdjs.OptionsCode.GDBackgroundObjects2= [];
gdjs.OptionsCode.GDBackgroundObjects3= [];

gdjs.OptionsCode.conditionTrue_0 = {val:false};
gdjs.OptionsCode.condition0IsTrue_0 = {val:false};
gdjs.OptionsCode.condition1IsTrue_0 = {val:false};
gdjs.OptionsCode.condition2IsTrue_0 = {val:false};
gdjs.OptionsCode.conditionTrue_1 = {val:false};
gdjs.OptionsCode.condition0IsTrue_1 = {val:false};
gdjs.OptionsCode.condition1IsTrue_1 = {val:false};
gdjs.OptionsCode.condition2IsTrue_1 = {val:false};


gdjs.OptionsCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.window.setWindowSize(runtimeScene, 1000, 500, true);
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("HydrophobicActivated")) == 0;
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("HydrophobicActivated").setNumber(-(1));
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("HydrophobicActivated")) == 1;
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HydrophobicCheat"), gdjs.OptionsCode.GDHydrophobicCheatObjects2);
{for(var i = 0, len = gdjs.OptionsCode.GDHydrophobicCheatObjects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDHydrophobicCheatObjects2[i].returnVariable(gdjs.OptionsCode.GDHydrophobicCheatObjects2[i].getVariables().getFromIndex(0)).mul(-(1));
}
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("MoonJumpActivated")) == 0;
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("MoonJumpActivated").setNumber(-(1));
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("MoonJumpActivated")) == 1;
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MoonJumpCheat"), gdjs.OptionsCode.GDMoonJumpCheatObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDMoonJumpCheatObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDMoonJumpCheatObjects1[i].returnVariable(gdjs.OptionsCode.GDMoonJumpCheatObjects1[i].getVariables().getFromIndex(0)).mul(-(1));
}
}}

}


};gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDCloseButtonObjects2Objects = Hashtable.newFrom({"CloseButton": gdjs.OptionsCode.GDCloseButtonObjects2});gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDCloseButtonObjects2Objects = Hashtable.newFrom({"CloseButton": gdjs.OptionsCode.GDCloseButtonObjects2});gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDCloseButtonObjects1Objects = Hashtable.newFrom({"CloseButton": gdjs.OptionsCode.GDCloseButtonObjects1});gdjs.OptionsCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CloseButton"), gdjs.OptionsCode.GDCloseButtonObjects2);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDCloseButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDCloseButtonObjects2 */
{for(var i = 0, len = gdjs.OptionsCode.GDCloseButtonObjects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDCloseButtonObjects2[i].setAnimationName("Hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CloseButton"), gdjs.OptionsCode.GDCloseButtonObjects2);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDCloseButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDCloseButtonObjects2 */
{for(var i = 0, len = gdjs.OptionsCode.GDCloseButtonObjects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDCloseButtonObjects2[i].setAnimationName("Base");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CloseButton"), gdjs.OptionsCode.GDCloseButtonObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDCloseButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
gdjs.OptionsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "First");
}}

}


};gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDPlusButtonObjects2Objects = Hashtable.newFrom({"PlusButton": gdjs.OptionsCode.GDPlusButtonObjects2});gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDMinusButtonObjects1Objects = Hashtable.newFrom({"MinusButton": gdjs.OptionsCode.GDMinusButtonObjects1});gdjs.OptionsCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlusButton"), gdjs.OptionsCode.GDPlusButtonObjects2);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDPlusButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
gdjs.OptionsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) + (2));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MinusButton"), gdjs.OptionsCode.GDMinusButtonObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDMinusButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
gdjs.OptionsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) - (2));
}}

}


};gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDHydrophobicCheatObjects2Objects = Hashtable.newFrom({"HydrophobicCheat": gdjs.OptionsCode.GDHydrophobicCheatObjects2});gdjs.OptionsCode.eventsList3 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition1IsTrue_0;
gdjs.OptionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8932332);
}
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDHydrophobicCheatObjects2 */
{for(var i = 0, len = gdjs.OptionsCode.GDHydrophobicCheatObjects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDHydrophobicCheatObjects2[i].returnVariable(gdjs.OptionsCode.GDHydrophobicCheatObjects2[i].getVariables().getFromIndex(0)).mul(-(1));
}
}{runtimeScene.getGame().getVariables().get("HydrophobicActivated").mul(-(1));
}}

}


};gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDMoonJumpCheatObjects1Objects = Hashtable.newFrom({"MoonJumpCheat": gdjs.OptionsCode.GDMoonJumpCheatObjects1});gdjs.OptionsCode.eventsList4 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition1IsTrue_0;
gdjs.OptionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8498876);
}
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDMoonJumpCheatObjects1 */
{for(var i = 0, len = gdjs.OptionsCode.GDMoonJumpCheatObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDMoonJumpCheatObjects1[i].returnVariable(gdjs.OptionsCode.GDMoonJumpCheatObjects1[i].getVariables().getFromIndex(0)).mul(-(1));
}
}{runtimeScene.getGame().getVariables().get("MoonJumpActivated").mul(-(1));
}}

}


};gdjs.OptionsCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HydrophobicCheat"), gdjs.OptionsCode.GDHydrophobicCheatObjects2);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDHydrophobicCheatObjects2.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDHydrophobicCheatObjects2[i].getVariableNumber(gdjs.OptionsCode.GDHydrophobicCheatObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDHydrophobicCheatObjects2[k] = gdjs.OptionsCode.GDHydrophobicCheatObjects2[i];
        ++k;
    }
}
gdjs.OptionsCode.GDHydrophobicCheatObjects2.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDHydrophobicCheatObjects2 */
{for(var i = 0, len = gdjs.OptionsCode.GDHydrophobicCheatObjects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDHydrophobicCheatObjects2[i].setAnimationName("Activated");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HydrophobicCheat"), gdjs.OptionsCode.GDHydrophobicCheatObjects2);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDHydrophobicCheatObjects2.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDHydrophobicCheatObjects2[i].getVariableNumber(gdjs.OptionsCode.GDHydrophobicCheatObjects2[i].getVariables().getFromIndex(0)) == -(1) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDHydrophobicCheatObjects2[k] = gdjs.OptionsCode.GDHydrophobicCheatObjects2[i];
        ++k;
    }
}
gdjs.OptionsCode.GDHydrophobicCheatObjects2.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDHydrophobicCheatObjects2 */
{for(var i = 0, len = gdjs.OptionsCode.GDHydrophobicCheatObjects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDHydrophobicCheatObjects2[i].setAnimationName("Base");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HydrophobicCheat"), gdjs.OptionsCode.GDHydrophobicCheatObjects2);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDHydrophobicCheatObjects2Objects, runtimeScene, true, false);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionsCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoonJumpCheat"), gdjs.OptionsCode.GDMoonJumpCheatObjects2);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDMoonJumpCheatObjects2.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDMoonJumpCheatObjects2[i].getVariableNumber(gdjs.OptionsCode.GDMoonJumpCheatObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDMoonJumpCheatObjects2[k] = gdjs.OptionsCode.GDMoonJumpCheatObjects2[i];
        ++k;
    }
}
gdjs.OptionsCode.GDMoonJumpCheatObjects2.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDMoonJumpCheatObjects2 */
{for(var i = 0, len = gdjs.OptionsCode.GDMoonJumpCheatObjects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDMoonJumpCheatObjects2[i].setAnimationName("Activated");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoonJumpCheat"), gdjs.OptionsCode.GDMoonJumpCheatObjects2);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDMoonJumpCheatObjects2.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDMoonJumpCheatObjects2[i].getVariableNumber(gdjs.OptionsCode.GDMoonJumpCheatObjects2[i].getVariables().getFromIndex(0)) == -(1) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDMoonJumpCheatObjects2[k] = gdjs.OptionsCode.GDMoonJumpCheatObjects2[i];
        ++k;
    }
}
gdjs.OptionsCode.GDMoonJumpCheatObjects2.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDMoonJumpCheatObjects2 */
{for(var i = 0, len = gdjs.OptionsCode.GDMoonJumpCheatObjects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDMoonJumpCheatObjects2[i].setAnimationName("Base");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoonJumpCheat"), gdjs.OptionsCode.GDMoonJumpCheatObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDMoonJumpCheatObjects1Objects, runtimeScene, true, false);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionsCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.OptionsCode.eventsList6 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("VolumeLevel"), gdjs.OptionsCode.GDVolumeLevelObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDVolumeLevelObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDVolumeLevelObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.sound.getGlobalVolume(runtimeScene)));
}
}}

}


{


gdjs.OptionsCode.eventsList1(runtimeScene);
}


{


gdjs.OptionsCode.eventsList2(runtimeScene);
}


{


gdjs.OptionsCode.eventsList5(runtimeScene);
}


};

gdjs.OptionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OptionsCode.GDCloseButtonObjects1.length = 0;
gdjs.OptionsCode.GDCloseButtonObjects2.length = 0;
gdjs.OptionsCode.GDCloseButtonObjects3.length = 0;
gdjs.OptionsCode.GDHydrophobicCheatObjects1.length = 0;
gdjs.OptionsCode.GDHydrophobicCheatObjects2.length = 0;
gdjs.OptionsCode.GDHydrophobicCheatObjects3.length = 0;
gdjs.OptionsCode.GDMoonJumpCheatObjects1.length = 0;
gdjs.OptionsCode.GDMoonJumpCheatObjects2.length = 0;
gdjs.OptionsCode.GDMoonJumpCheatObjects3.length = 0;
gdjs.OptionsCode.GDPlusButtonObjects1.length = 0;
gdjs.OptionsCode.GDPlusButtonObjects2.length = 0;
gdjs.OptionsCode.GDPlusButtonObjects3.length = 0;
gdjs.OptionsCode.GDMinusButtonObjects1.length = 0;
gdjs.OptionsCode.GDMinusButtonObjects2.length = 0;
gdjs.OptionsCode.GDMinusButtonObjects3.length = 0;
gdjs.OptionsCode.GDVolumeLevelObjects1.length = 0;
gdjs.OptionsCode.GDVolumeLevelObjects2.length = 0;
gdjs.OptionsCode.GDVolumeLevelObjects3.length = 0;
gdjs.OptionsCode.GDOptionsMenuObjects1.length = 0;
gdjs.OptionsCode.GDOptionsMenuObjects2.length = 0;
gdjs.OptionsCode.GDOptionsMenuObjects3.length = 0;
gdjs.OptionsCode.GDBackgroundObjects1.length = 0;
gdjs.OptionsCode.GDBackgroundObjects2.length = 0;
gdjs.OptionsCode.GDBackgroundObjects3.length = 0;

gdjs.OptionsCode.eventsList6(runtimeScene);
return;

}

gdjs['OptionsCode'] = gdjs.OptionsCode;
