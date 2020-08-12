window.hjSiteSettings = window.hjSiteSettings || {"site_id":1624465,"r":0.040664230324074076,"rec_value":1.0,"state_change_listen_mode":"automatic","record":false,"continuous_capture_enabled":false,"recording_capture_keystrokes":false,"anonymize_digits":true,"anonymize_emails":true,"suppress_all":false,"suppress_text":false,"suppress_location":false,"user_attributes_enabled":false,"legal_name":"Toppr Technologies Pvt. Ltd.","privacy_policy_url":"https://www.toppr.com/privacy/","deferred_page_contents":[],"record_targeting_rules":[],"feedback_widgets":[{"id":286598,"created_epoch_time":1580410384,"effective_show_branding":true,"skin":"light","background":"#736ae6","position":"middle_right","content":{"emotion":"How would you rate your experience?","thankyou":"Thank you for sharing your feedback with us!","initial":"Help us improve by sharing your feedback.","email":"We may wish to follow up. Enter your email if you're happy for us to contact you.","comment_footer":"<p><strong>What bothered you?</strong></p>"},"language":"en","display_condition":"immediate","display_delay":0,"persist_condition":"always","auto_screenshot":true,"targeting_percentage":100,"targeting":[{"component":"device","match_operation":"exact","pattern":"desktop","negate":false,"name":null,"rule_type":null},{"component":"device","match_operation":"exact","pattern":"tablet","negate":false,"name":null,"rule_type":null},{"component":"device","match_operation":"exact","pattern":"phone","negate":false,"name":null,"rule_type":null},{"component":"url","match_operation":"contains","pattern":"/ask/","negate":false,"name":null,"rule_type":null},{"component":"url","match_operation":"contains","pattern":"/content/","negate":false,"name":null,"rule_type":null}],"ask_for_consent":false,"emotion_style":"default","show_legal":false}],"forms":[],"heatmaps":[{"id":6334350,"created_epoch_time":1596098805,"targeting":[{"component":"url","match_operation":"exact","pattern":"https://www.toppr.com/ask/","negate":false}],"selector_version":2,"capture_type":"SNAPSHOT_1000"}],"polls":[{"id":525040,"created_epoch_time":1595844411,"skin":"dark","background":"#333333","effective_show_branding":true,"position":"right","content":{"version":2,"questions":[{"uuid":"48d2d641-bf55-4583-947e-4fd46ca7283a","type":"single-open-ended-multiple-line","text":"What did you expect from this page?","required":true,"next":"byOrder"},{"uuid":"2f4047d4-075b-4ac1-86ef-cb24e2fcc4a2","type":"single-close-ended","text":"Were your expectations met?","required":true,"randomize_answer_order":true,"answers":[{"text":"Yes ","comments":true},{"text":"No","comments":false}],"next":"byOrder"},{"uuid":"5d460d3f-ccc1-4e43-8558-c77d089b495f","type":"single-open-ended-multiple-line","text":"How can we make this page better for you?","required":true,"next":"byOrder"},{"uuid":"eda7c4c8-79ab-44db-a00e-555ddbbd7caa","type":"single-open-ended-single-line","text":"We'd like to contact you , please enter your name and phone number","required":false,"nextIfSkipped":"byOrder","next":"byOrder"}],"thankyou":"Thank you for answering this Poll. Your feedback is highly appreciated!"},"ask_for_consent":false,"language":"en","display_condition":"delay","display_delay":30,"persist_condition":"response","targeting_percentage":100,"targeting":[{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"desktop","rule_type":null},{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"tablet","rule_type":null},{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"phone","rule_type":null},{"component":"url","match_operation":"contains","name":null,"negate":false,"pattern":"/ask/topic-questions/","rule_type":null}],"show_legal":false,"uuid":"972a763c-4e64-43cd-b69d-21dd7ef0a4f9","enabled_offsite":false,"logo_url":null,"invite":{"title":"Your feedback is important to us!","description":"Tell us what you think about this page by taking our quick Survey.","button":"Yes, I will give feedback","close":"No thanks"},"invite_enabled":false}],"surveys":[],"integrations":{"optimizely":{"tag_recordings":false}},"features":["recordings.continuous_capture.beta","recordings.continuous_capture","settings.billing_v2"]};

!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=251)}({251:function(e,t){window.hjBootstrap=window.hjBootstrap||function(e,t,n){var o=["bot","headless","google","baidu","bing","msn","duckduckbot","teoma","slurp","yandex","phantomjs","pingdom","ahrefsbot"].join("|"),r=new RegExp(o,"i"),a=window.navigator||{userAgent:"unknown"},i=a.userAgent?a.userAgent:"unknown";if(r.test(i))console.warn("Hotjar not launching due to suspicious userAgent:",i);else{var d=function(e,t,n){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(n),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};d(0,0,n);var s,u,l,c,p=window.document,f=p.head||p.getElementsByTagName("head")[0];p.addEventListener&&(hj.scriptDomain=e,(s=p.createElement("script")).async=1,s.src=hj.scriptDomain+t,s.charset="utf-8",f.appendChild(s),c=["iframe#_hjRemoteVarsFrame {","display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;","}"],(u=p.createElement("style")).type="text/css",u.styleSheet?u.styleSheet.cssText=c.join(""):u.appendChild(p.createTextNode(c.join(""))),f.appendChild(u),(l=p.createElement("iframe")).style.cssText=c[1],l.name="_hjRemoteVarsFrame",l.title="_hjRemoteVarsFrame",l.id="_hjRemoteVarsFrame",l.src="https://"+(window._hjSettings.varsHost||"vars.hotjar.com")+"/box-469cf41adb11dc78be68c1ae7f9457a4.html",l.onload=function(){d.varsLoaded=!0,"undefined"!=typeof hj&&hj.event&&hj.event.signal("varsLoaded")},d.varsJar=l,"interactive"===p.readyState||"complete"===p.readyState||"loaded"===p.readyState?h():p.addEventListener("DOMContentLoaded",h),d.revision="772772df5a395b10576505e6f15a6eca09ea81ad",window.hjBootstrap=d)}function h(){setTimeout(function(){p.body.appendChild(l)},50)}},window.hjBootstrap("https://script.hotjar.com/","modules.bb90e8997a8113b9e5f1.js","1624465")}});
//# sourceMappingURL=hotjar.js.map