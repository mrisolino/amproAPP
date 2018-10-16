// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// tslint:disable: variable-name
export class CoreConfigConstants {
    static app_id = 'com.tercertermino.anproapp';
    static appname = 'AnproCampus';
    static desktopappname = 'Moodle Desktop';
    static versioncode = '4070';
    static versionname = '4.0.7';
    static cache_expiration_time = 300000;
    static default_lang = 'es';
    static languages: any = {
        'en': 'English',
        'es': 'Español',
        'pt-br': 'Português - Brasil'
    };
    static wsservice = 'moodle_mobile_app';
    static wsextservice = 'local_mobile';
    static demo_sites: any = {};
    static gcmpn = '194831313794';
    static customurlscheme = 'moodlemobile';
    static siteurl = 'http://www.anprocampus.com/';
    static multisitesdisplay = 'false';
    static skipssoconfirmation = 'true';
    static forcedefaultlanguage = 'true';
    static privacypolicy = 'https://moodle.org/mod/page/view.php?id=8148';
}
