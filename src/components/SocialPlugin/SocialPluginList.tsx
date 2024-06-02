import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faFacebook, faInstagram, faPinterest, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export const SocialPluginList = () => {
    return (
        <div className="w-full bg-white shadow-sm rounded-sm p-4 ">
            <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Сотцети</h3>
            <div className="flex gap-2">
                <a href="#"
                   className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a href="#"
                   className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a href="#"
                   className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="#"
                   className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                    <FontAwesomeIcon icon={faPinterest}/>
                </a>
                <a href="#"
                   className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </div>
        </div>
    )
}