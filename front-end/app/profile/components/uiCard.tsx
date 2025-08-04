import { Users,MapPin,Phone,Mail } from "lucide-react"
import { renderStars } from "../[id]/page"
export default function UiCard(){
    return(
        <>
        <article className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 overflow-hidden h-full">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="relative z-10">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <Users className="w-8 h-8" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold">John Yohan</h2>
                            <p className="text-blue-100">@TheYearly</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        {renderStars(4.8)}
                        <span className="text-sm text-gray-600 ml-1">4.8 / 5</span>
                      </div>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Response Rate</span>
                          <span className="font-medium">98%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Completion Rate</span>
                          <span className="font-medium">95%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Member Since</span>
                          <span className="font-medium">Jan 2023</span>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>New York, NY</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={14} />
                          <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail size={14} />
                          <span>john@example.com</span>
                        </div>
                      </div>
                     
                    </div>
                  </article></>
    )
}