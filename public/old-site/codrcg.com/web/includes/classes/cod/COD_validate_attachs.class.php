<?php

    class ValidateAttachs {

		/*
		* Validate the attachs for Black Ops 2
		*
		* @param $Attachments	Array of attachments
		* @param $Optic	        Optic
		*
		* @returns a boolean
		*/
		public static function BO2 ($Attachments, $Optic) {
			if (!is_array($Attachments)){
				$Attachments = [];
				return 0;
			}

			foreach ($Attachments as $attach) {
				if (
					($attach['Name'] == 'Ballistics CPU' && $Optic) ||
					($attach['Name'] == 'Dual Wield' && ($Optic || count($Attachments) > 1))
				) {
					return 0;
				}
			}

			return 1;
		}/* BO2 */

        /*
		* Validate the attachs for Black Ops 3
		*
		* @param $Attachments	Array of attachments
		* @param $Optic	        Optic
		*
		* @returns a boolean
		*/
        public static function BO3 ($Attachments, $Optic) {
            if (!is_array($Attachments)){
                $Attachments = [];
                return 0;
            }

            foreach ($Attachments as $attach) {
                if (
                    ($attach['Name'] == 'Ballistics CPU' && $Optic) ||
                    ($attach['Name'] == 'Dual Wield' && ($Optic || count($Attachments) > 1))
                ) {
                    return 0;
                }
            }

            return 1;
        }/* BO3 */

        /*
		* Validate the attachs for Modern Warfare 2
		*
		* @param $Attachments	Array of attachments
		* @param $Optic	        Optic
		*
		* @returns a boolean
		*/
        public static function MW2 ($Attachments, $Optic) {
            if (!is_array($Attachments)){
                $Attachments = [];
                return 0;
            }

            foreach ($Attachments as $attach) {
                if (
                    ($attach['Name'] == 'Akimbo' && ($Optic || count($Attachments) > 1))
                ) {
                    return 0;
                }
            }

            return 1;
        }/* MW2 */

        /*
		* Validate the attachs for Modern Warfare 3
		*
		* @param $Attachments	Array of attachments
		* @param $Optic	        Optic
		*
		* @returns a boolean
		*/
        public static function MW3 ($Attachments, $Optic) {
            if (!is_array($Attachments)){
                $Attachments = [];
                return 0;
            }

            foreach ($Attachments as $attach) {
                if (
                    ($attach['Name'] == 'Akimbo' && ($Optic || count($Attachments) > 1))
                ) {
                    return 0;
                }
            }

            return 1;
        }/* MW3 */

        /*
		* Validate the attachs for Infinite Warfare
		*
		* @param $Attachments	Array of attachments
		* @param $Optic	        Optic
		*
		* @returns a boolean
		*/
        public static function IW ($Attachments, $Optic) {
            if (!is_array ($Attachments)) {
                $Attachments = [];

                return 0;
            }

            foreach ($Attachments as $attach) {
                if (($attach['Name'] == 'Ballistics CPU' && $Optic) || ($attach['Name'] == 'Dual Wield' && ($Optic || count ($Attachments) > 1))) {
                    return 0;
                }
            }

            return 1;
        }/* IW */
		
		
	
		/*
		* Validate the attachs for World War II
		*
		* @param $Attachments	Array of attachments
		* @param $Optic	        Optic
		*
		* @returns a boolean
		*/
		public static function WW2 ($Attachments, $Optic) {
			if (!is_array($Attachments)){
				$Attachments = [];
				return 0;
			}
			//TODO: Check this out
			// foreach ($Attachments as $attach) {
			// 	if (
			// 		($attach['Name'] == 'Ballistics CPU' && $Optic) ||
			// 		($attach['Name'] == 'Dual Wield' && ($Optic || count($Attachments) > 1))
			// 	) {
			// 		return 0;
			// 	}
			// }

			return 1;
		}/* WW2 */

    }/* ValidateAttachs */
?>