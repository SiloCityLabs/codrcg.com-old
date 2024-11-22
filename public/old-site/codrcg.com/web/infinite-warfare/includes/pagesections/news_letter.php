<script type="text/javascript">

    /** This section is only needed once per page if manually copying **/
    if (typeof MauticSDKLoaded == 'undefined') {
        var MauticSDKLoaded = true;
        var head            = document.getElementsByTagName('head')[0];
        var script          = document.createElement('script');
        script.type         = 'text/javascript';
        script.src          = 'https://track.techreanimate.com/media/js/mautic-form.js';
        script.onload       = function() {
            MauticSDK.onLoad();
        };
        head.appendChild(script);
        var MauticDomain = 'https://track.techreanimate.com';
        var MauticLang   = {
            'submittingMessage': "Please wait..."
        }
    }
</script>

<style type="text/css" scoped>
    .mauticform-name { font-weight: bold; font-size: 1.5em; margin-bottom: 3px; }
    .mauticform-description { margin-top: 2px; margin-bottom: 10px; }
    .mauticform-error { margin-bottom: 10px; color: red; }
    .mauticform-message { margin-bottom: 10px;color: green; }
    .mauticform-row { display: block; margin-bottom: 20px; }
    .mauticform-label { font-size: 1.1em; display: block; font-weight: bold; margin-bottom: 5px; }
    .mauticform-row.mauticform-required .mauticform-label:after { color: #e32; content: " *"; display: inline; }
    .mauticform-helpmessage { display: block; font-size: 0.9em; margin-bottom: 3px; }
    .mauticform-errormsg { display: block; color: red; margin-top: 2px; }
    .mauticform-selectbox, .mauticform-input, .mauticform-textarea { width: 50%; padding: 0.2em 0.2em; border: 1px solid #CCC; box-shadow: 0px 1px 3px #DDD inset; border-radius: 4px; box-sizing: border-box; }
    .mauticform-checkboxgrp-label { font-weight: normal; }
    .mauticform-radiogrp-label { font-weight: normal; }
</style>
<div id="mauticform_wrapper_codrcgnewsletter" class="mauticform_wrapper">
    <form autocomplete="false" role="form" method="post" action="https://track.techreanimate.com/form/submit?formId=7" id="mauticform_codrcgnewsletter" data-mautic-form="codrcgnewsletter">
        <div class="mauticform-error" id="mauticform_codrcgnewsletter_error"></div>
        <div class="mauticform-message" id="mauticform_codrcgnewsletter_message"></div>
        <div class="mauticform-innerform">

            <div id="mauticform_codrcgnewsletter_email"  class="mauticform-row mauticform-email">
                <input id="mauticform_input_codrcgnewsletter_email" name="mauticform[email]" value="" placeholder="Email Address" class="mauticform-input" type="email" />
                <span class="mauticform-errormsg" style="display: none;"></span>
            </div>

            <div id="mauticform_codrcgnewsletter_submit"  class="mauticform-row mauticform-button-wrapper">
                <button type="submit" name="mauticform[submit]" id="mauticform_input_codrcgnewsletter_submit" name="mauticform[submit]" value="" class="mauticform-button" value="1">Submit</button>
            </div>

            <input type="hidden" name="mauticform[formId]" id="mauticform_codrcgnewsletter_id" value="7" />
            <input type="hidden" name="mauticform[return]" id="mauticform_codrcgnewsletter_return" value="" />
            <input type="hidden" name="mauticform[formName]" id="mauticform_codrcgnewsletter_name" value="codrcgnewsletter" />

        </div>
    </form>
</div>