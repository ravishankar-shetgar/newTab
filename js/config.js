
/**
 *
 * @source: https://startpage.gnu.cat/js/config.js
 *
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (C) 2021  Jaume Fuster i Claris
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

class Config {

	get structure() {
		return JSON.parse(localStorage.getItem("structure"));
	}
	set structure(structure) {
		localStorage.structure = JSON.stringify(structure);
	}

	get settings() {
		return JSON.parse(localStorage.getItem("settings"));
	}
	set settings(settings) {
		localStorage.settings = JSON.stringify(settings);
	}

	constructor() {
		this.structure = this.structure || {
			"DASHBOARDS": [
				["clickUp", "https://app.clickup.com/1252943/home"],
				["appleDev", "https://developer.apple.com/account/"],
				["appStoreConnect", "https://appstoreconnect.apple.com/apps"],
				["bitrise", "https://app.bitrise.io/dashboard"],
				["oneSignal", "https://dashboard.onesignal.com/apps"],
				["codePush", "https://appcenter.ms/apps"],
				[
					"sentry",
					"https://sentry.io/organizations/truckx/issues/?project=6420565"
				],
				[
					"playConsole",
					"https://play.google.com/console/u/0/developers/6142809661711510203/app-list"
				]
			],
			"WORK": [
				["gmail", "https://mail.google.com/mail/u/0/#inbox"],
				["calendar", "https://calendar.google.com/calendar/u/0/r?tab=mc"],
				["googleMeet", "https://meet.google.com/?hs=197&pli=1&authuser=0"],
				["googleDocs", "https://drive.google.com/drive/my-drive"],
				[
					"dailyMobileStandUp",
					"https://meet.google.com/axz-noyq-cwu"
				],
				["ascentPayroll", "https://truckx.ascentpayroll.com"],
				["keka", "https://truckx.keka.com/#/home/dashboard"]
			],
			"TRUCKX": [
				[
					"fleetAppGithub",
					"https://github.com/ravishankarShetgar/fleet-management-app"
				],
				[
					"driverLogAppGithub",
					"https://github.com/ravishankarShetgar/driver-logbook-app"
				],
				["fmsWebAppGithub", "https://github.com/ravishankarShetgar/fms-web"],
				["fmsWebApp", "https://web.truckx.com/#/efms/logbook"],
				["efmsWebApp", "https://reseller-web3-k8s-staging.truckx.com/"],
				["truckxSupportLogin", "https://web.truckx.com/#/support-login"],
				["jenkinsDashboard", "https://jenkins-dev.truckx.com/"],
				["figma", "https://www.figma.com"],
				["openVpnClient", "https://34.94.126.189/"]
			],
			"OTHER": [
				["trilium", "http://127.0.0.1:8080/#root/"],
				["devdocs", "https://devdocs.io/"],
				["colorwheel", "https://color.adobe.com/create/color-wheel"],
				["freeCodeCamp", "https://www.freecodecamp.org/learn"],
				["youtube", "https://www.youtube.com/"],
				["mobileDir", "http://192.168.29.226:8080"],
				["keybr", "https://www.keybr.com/"]
			]
		};
		this.settings = this.settings || {
			"clock": {
				"effect": "none"
			},
			"palette": {
				"background": "#0E0F11",
				"foreground": "#7384C888",
				"accent": "#fff"
			},
			"cute": false
		}
	}

}

var cfg = new Config();
