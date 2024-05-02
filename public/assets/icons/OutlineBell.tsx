import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgOutlineBell = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m2.515 18 1.18-1.182c.378-.378.586-.88.586-1.414v-4.677c0-1.357.59-2.654 1.62-3.556a4.66 4.66 0 0 1 3.737-1.129c2.327.309 4.082 2.413 4.082 4.895v4.467c0 .534.208 1.036.585 1.413L15.485 18zM11 20.341C11 21.24 10.084 22 9 22s-2-.76-2-1.659V20h4zm6.52-3.133-1.8-1.804v-4.467c0-3.481-2.502-6.438-5.82-6.877a6.72 6.72 0 0 0-5.317 1.607 6.73 6.73 0 0 0-2.302 5.06l-.001 4.677-1.801 1.804a1.63 1.63 0 0 0-.354 1.782C.38 19.604.973 20 1.637 20H5v.341C5 22.359 6.794 24 9 24s4-1.641 4-3.659V20h3.363c.664 0 1.256-.396 1.51-1.009a1.63 1.63 0 0 0-.352-1.783"
      clipRule="evenodd"
    />
    <circle cx={17.5} cy={6.5} r={6.5} fill="#CC1439" />
    <path
      fill="currentColor"
      d="M17.509 10.1q-.731 0-1.307-.253a2.2 2.2 0 0 1-.906-.7q-.33-.45-.355-1.043h1.115a.96.96 0 0 0 .217.56q.199.236.518.363.32.128.71.128.43 0 .76-.15.334-.148.523-.415a1.06 1.06 0 0 0 .188-.621q0-.366-.188-.643a1.23 1.23 0 0 0-.544-.44 2.1 2.1 0 0 0-.859-.16h-.614V5.83h.614q.405 0 .71-.146.309-.146.483-.404.174-.263.174-.615 0-.337-.152-.586-.15-.252-.427-.394a1.4 1.4 0 0 0-.646-.142q-.355 0-.664.131-.306.129-.497.37a.95.95 0 0 0-.206.571h-1.062q.018-.59.348-1.036a2.25 2.25 0 0 1 .88-.7q.547-.252 1.215-.252.7 0 1.208.273.51.27.788.721.281.45.277.987.003.611-.34 1.037-.342.426-.91.572v.057q.724.11 1.122.575.401.465.398 1.154.003.6-.334 1.076a2.3 2.3 0 0 1-.912.75 3.1 3.1 0 0 1-1.325.27"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgOutlineBell)
const Memo = memo(ForwardRef)
export default Memo
