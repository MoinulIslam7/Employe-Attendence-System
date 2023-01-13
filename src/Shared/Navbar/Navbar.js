import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRightOnRectangleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div class="bg-primary sidebar h-full">

            <h3 className='text-white text-2xl'>Place A Logo Here</h3>
            <div className='mt-20'>
                <ul className='text-white'>

                    <li className='text-xl font-semibold mb-4'>
                        <NavLink to='/' className={`${({ isActive }) => isActive ? 'active' : undefined} flex`}>
                            <svg className='w-8 h-8 mr-3 ml-16' width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.8893 0.794312H2.79431C2.2857 0.794312 1.79792 0.996357 1.43828 1.356C1.07863 1.71564 0.876587 2.20342 0.876587 2.71204V19.9716C0.876587 20.4802 1.07863 20.9679 1.43828 21.3276C1.79792 21.6872 2.2857 21.8893 2.79431 21.8893H23.8893C24.3979 21.8893 24.8857 21.6872 25.2453 21.3276C25.605 20.9679 25.807 20.4802 25.807 19.9716V2.71204C25.807 2.20342 25.605 1.71564 25.2453 1.356C24.8857 0.996357 24.3979 0.794312 23.8893 0.794312ZM2.79431 2.71204H23.8893V7.50635H2.79431V2.71204ZM23.8893 19.9716H11.4241V9.42407H23.8893V19.9716Z" fill="white" />
                            </svg>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className='text-xl font-semibold mb-4'>
                        <NavLink to='/attendance' className='flex'>
                            <svg className='w-8 h-8 mr-3 ml-16' width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.8893 0.794312H2.79431C2.2857 0.794312 1.79792 0.996357 1.43828 1.356C1.07863 1.71564 0.876587 2.20342 0.876587 2.71204V19.9716C0.876587 20.4802 1.07863 20.9679 1.43828 21.3276C1.79792 21.6872 2.2857 21.8893 2.79431 21.8893H23.8893C24.3979 21.8893 24.8857 21.6872 25.2453 21.3276C25.605 20.9679 25.807 20.4802 25.807 19.9716V2.71204C25.807 2.20342 25.605 1.71564 25.2453 1.356C24.8857 0.996357 24.3979 0.794312 23.8893 0.794312ZM2.79431 2.71204H23.8893V7.50635H2.79431V2.71204ZM23.8893 19.9716H11.4241V9.42407H23.8893V19.9716Z" fill="white" />
                            </svg>
                            Attendance
                        </NavLink>
                    </li>
                    <li className='text-xl font-semibold mb-4'>
                        <NavLink to='/employees' className='flex'>
                            <svg className='w-8 h-8 mr-3 ml-16' width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.8893 0.794312H2.79431C2.2857 0.794312 1.79792 0.996357 1.43828 1.356C1.07863 1.71564 0.876587 2.20342 0.876587 2.71204V19.9716C0.876587 20.4802 1.07863 20.9679 1.43828 21.3276C1.79792 21.6872 2.2857 21.8893 2.79431 21.8893H23.8893C24.3979 21.8893 24.8857 21.6872 25.2453 21.3276C25.605 20.9679 25.807 20.4802 25.807 19.9716V2.71204C25.807 2.20342 25.605 1.71564 25.2453 1.356C24.8857 0.996357 24.3979 0.794312 23.8893 0.794312ZM2.79431 2.71204H23.8893V7.50635H2.79431V2.71204ZM23.8893 19.9716H11.4241V9.42407H23.8893V19.9716Z" fill="white" />
                            </svg>
                            Employees
                        </NavLink>
                    </li>
                    <li className='text-xl font-semibold mb-4'>
                        <NavLink to='/leaves' className='flex'>
                            <svg className='w-8 h-8 mr-3 ml-16' width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.8893 0.794312H2.79431C2.2857 0.794312 1.79792 0.996357 1.43828 1.356C1.07863 1.71564 0.876587 2.20342 0.876587 2.71204V19.9716C0.876587 20.4802 1.07863 20.9679 1.43828 21.3276C1.79792 21.6872 2.2857 21.8893 2.79431 21.8893H23.8893C24.3979 21.8893 24.8857 21.6872 25.2453 21.3276C25.605 20.9679 25.807 20.4802 25.807 19.9716V2.71204C25.807 2.20342 25.605 1.71564 25.2453 1.356C24.8857 0.996357 24.3979 0.794312 23.8893 0.794312ZM2.79431 2.71204H23.8893V7.50635H2.79431V2.71204ZM23.8893 19.9716H11.4241V9.42407H23.8893V19.9716Z" fill="white" />
                            </svg>
                            Leaves
                        </NavLink>
                    </li>
                    <li className='text-xl font-semibold mb-4'>
                        <NavLink to='/expense' className='flex'>
                            <svg className='w-8 h-8 mr-3 ml-16' width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.8893 0.794312H2.79431C2.2857 0.794312 1.79792 0.996357 1.43828 1.356C1.07863 1.71564 0.876587 2.20342 0.876587 2.71204V19.9716C0.876587 20.4802 1.07863 20.9679 1.43828 21.3276C1.79792 21.6872 2.2857 21.8893 2.79431 21.8893H23.8893C24.3979 21.8893 24.8857 21.6872 25.2453 21.3276C25.605 20.9679 25.807 20.4802 25.807 19.9716V2.71204C25.807 2.20342 25.605 1.71564 25.2453 1.356C24.8857 0.996357 24.3979 0.794312 23.8893 0.794312ZM2.79431 2.71204H23.8893V7.50635H2.79431V2.71204ZM23.8893 19.9716H11.4241V9.42407H23.8893V19.9716Z" fill="white" />
                            </svg>
                            Expense
                        </NavLink>
                    </li>
                    <li className='text-xl font-semibold mb-4'>
                        <NavLink to='/notice' className='flex'>
                            <svg className='w-8 h-8 mr-3 ml-16' width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.8893 0.794312H2.79431C2.2857 0.794312 1.79792 0.996357 1.43828 1.356C1.07863 1.71564 0.876587 2.20342 0.876587 2.71204V19.9716C0.876587 20.4802 1.07863 20.9679 1.43828 21.3276C1.79792 21.6872 2.2857 21.8893 2.79431 21.8893H23.8893C24.3979 21.8893 24.8857 21.6872 25.2453 21.3276C25.605 20.9679 25.807 20.4802 25.807 19.9716V2.71204C25.807 2.20342 25.605 1.71564 25.2453 1.356C24.8857 0.996357 24.3979 0.794312 23.8893 0.794312ZM2.79431 2.71204H23.8893V7.50635H2.79431V2.71204ZM23.8893 19.9716H11.4241V9.42407H23.8893V19.9716Z" fill="white" />
                            </svg>
                            Notice
                        </NavLink>
                    </li>
                    <li className='text-xl font-semibold mb-4'>
                        <NavLink to='/departments' className='flex'>
                            <svg className='w-8 h-8 mr-3 ml-16' width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.8893 0.794312H2.79431C2.2857 0.794312 1.79792 0.996357 1.43828 1.356C1.07863 1.71564 0.876587 2.20342 0.876587 2.71204V19.9716C0.876587 20.4802 1.07863 20.9679 1.43828 21.3276C1.79792 21.6872 2.2857 21.8893 2.79431 21.8893H23.8893C24.3979 21.8893 24.8857 21.6872 25.2453 21.3276C25.605 20.9679 25.807 20.4802 25.807 19.9716V2.71204C25.807 2.20342 25.605 1.71564 25.2453 1.356C24.8857 0.996357 24.3979 0.794312 23.8893 0.794312ZM2.79431 2.71204H23.8893V7.50635H2.79431V2.71204ZM23.8893 19.9716H11.4241V9.42407H23.8893V19.9716Z" fill="white" />
                            </svg>
                            Departments
                        </NavLink>
                    </li>

                    <li className='text-xl font-semibold mb-4'>
                        <Link className='flex'>
                            <ChevronDownIcon className='w-6 h-6 ml-6' />
                            <svg className='w-8 h-8 mr-3 ml-4' width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.4629 10.4997C27.4331 10.3657 27.3749 10.2396 27.2922 10.13C27.2095 10.0205 27.1043 9.92991 26.9835 9.86453L24.1313 8.2826C23.9795 7.971 23.8117 7.67139 23.6279 7.38377L23.6758 4.12402C23.6769 3.98729 23.6498 3.85181 23.5962 3.72603C23.5426 3.60024 23.4636 3.48687 23.3643 3.39297C21.9441 2.10533 20.2645 1.13684 18.4387 0.552673C18.3076 0.511788 18.1693 0.499194 18.0329 0.515721C17.8966 0.532248 17.7653 0.577521 17.6477 0.648548L14.8553 2.32636C14.5078 2.31438 14.1722 2.31438 13.8247 2.32636L11.0323 0.648548C10.9148 0.577521 10.7835 0.532248 10.6471 0.515721C10.5108 0.499194 10.3725 0.511788 10.2414 0.552673C8.4131 1.13728 6.73286 2.11027 5.31579 3.40495C5.21553 3.49562 5.13584 3.6067 5.0821 3.73073C5.02835 3.85476 5.00179 3.98886 5.00419 4.12402L5.06411 7.38377C4.87236 7.67139 4.70458 7.971 4.5368 8.2826L1.6965 9.86453C1.57427 9.92793 1.46778 10.0179 1.38483 10.1278C1.30188 10.2377 1.24458 10.3648 1.21713 10.4997C0.809622 12.3713 0.809622 14.3087 1.21713 16.1803C1.2469 16.3143 1.3051 16.4404 1.38781 16.55C1.47051 16.6595 1.57578 16.7501 1.6965 16.8155L4.54879 18.3974C4.70169 18.7074 4.8738 19.0076 5.06411 19.2962L5.00419 22.556C5.0031 22.6927 5.0302 22.8282 5.08381 22.954C5.13742 23.0798 5.21639 23.1931 5.31579 23.287C6.73794 24.572 8.41686 25.5401 10.2414 26.1273C10.3725 26.1682 10.5108 26.1808 10.6471 26.1643C10.7835 26.1478 10.9148 26.1025 11.0323 26.0315L13.8247 24.3536H14.8553L17.6597 26.0315C17.8055 26.1273 17.9766 26.1774 18.1511 26.1753C18.2485 26.1711 18.3451 26.155 18.4387 26.1273C20.2669 25.5427 21.9472 24.5697 23.3643 23.275C23.4645 23.1844 23.5442 23.0733 23.5979 22.9493C23.6517 22.8252 23.6783 22.6911 23.6758 22.556L23.6279 19.2962C23.8077 19.0086 23.9755 18.709 24.1432 18.3974L26.9955 16.8155C27.1145 16.7494 27.2178 16.6585 27.2985 16.5489C27.3792 16.4393 27.4352 16.3135 27.4629 16.1803C27.8704 14.3087 27.8704 12.3713 27.4629 10.4997ZM19.6131 13.34C19.6131 14.3829 19.3039 15.4024 18.7245 16.2696C18.145 17.1368 17.3215 17.8126 16.358 18.2117C15.3944 18.6108 14.3342 18.7153 13.3113 18.5118C12.2884 18.3083 11.3488 17.8061 10.6114 17.0687C9.8739 16.3312 9.37168 15.3916 9.16822 14.3687C8.96475 13.3459 9.06918 12.2856 9.46829 11.3221C9.8674 10.3585 10.5433 9.53498 11.4104 8.95556C12.2776 8.37614 13.2971 8.06688 14.34 8.06688C15.7385 8.06688 17.0798 8.62244 18.0687 9.61134C19.0576 10.6002 19.6131 11.9415 19.6131 13.34Z" fill="#FEFEFE" />
                            </svg>

                            Setting
                        </Link>
                        <ul className="ml-32 list-disc">
                            <li className='mb-2'>Approval</li>
                            <li className='mb-2'>Leave</li>
                            <li className='mb-2'>Office Setting</li>
                            <li className='mb-2'>My Subscriptions</li>
                            
                        </ul>
                    </li>

                    <li className='text-xl font-semibold mb-4 mt-24 logout'>
                        <Link className='flex'>
                            <svg className='w-8 h-8 mr-3 ml-16' width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.125C0 1.4 1.20622 0 2.69244 0H6.53879C6.84483 5.2929e-09 7.13833 0.141103 7.35473 0.392268C7.57113 0.643433 7.6927 0.984085 7.6927 1.33929C7.6927 1.69449 7.57113 2.03514 7.35473 2.2863C7.13833 2.53747 6.84483 2.67857 6.53879 2.67857H2.69244C2.59043 2.67857 2.4926 2.72561 2.42047 2.80933C2.34833 2.89305 2.30781 3.0066 2.30781 3.125V21.875C2.30781 22.1214 2.48013 22.3214 2.69244 22.3214H6.53879C6.84483 22.3214 7.13833 22.4625 7.35473 22.7137C7.57113 22.9649 7.6927 23.3055 7.6927 23.6607C7.6927 24.0159 7.57113 24.3566 7.35473 24.6077C7.13833 24.8589 6.84483 25 6.53879 25H2.69244C1.97836 25 1.29353 24.6708 0.788599 24.0847C0.283668 23.4987 0 22.7038 0 21.875V3.125ZM16.0624 11.1607H7.30806C7.00203 11.1607 6.70853 11.3018 6.49213 11.553C6.27573 11.8041 6.15416 12.1448 6.15416 12.5C6.15416 12.8552 6.27573 13.1959 6.49213 13.447C6.70853 13.6982 7.00203 13.8393 7.30806 13.8393H16.0624L13.0314 17.3571C12.9181 17.4798 12.8271 17.6276 12.7641 17.7919C12.701 17.9562 12.6671 18.1335 12.6643 18.3134C12.6616 18.4932 12.6901 18.6718 12.7482 18.8386C12.8062 19.0053 12.8926 19.1568 13.0021 19.284C13.1117 19.4112 13.2422 19.5114 13.3859 19.5788C13.5296 19.6461 13.6835 19.6792 13.8384 19.6761C13.9934 19.6729 14.1462 19.6335 14.2877 19.5603C14.4293 19.4871 14.5566 19.3816 14.6623 19.25L19.6625 13.4464C19.8786 13.1953 20 12.8549 20 12.5C20 12.1451 19.8786 11.8047 19.6625 11.5536L14.6623 5.75C14.5566 5.61842 14.4293 5.51288 14.2877 5.43968C14.1462 5.36648 13.9934 5.32712 13.8384 5.32394C13.6835 5.32077 13.5296 5.35385 13.3859 5.42121C13.2422 5.48857 13.1117 5.58883 13.0021 5.716C12.8926 5.84318 12.8062 5.99467 12.7482 6.16143C12.6901 6.3282 12.6616 6.50682 12.6643 6.68665C12.6671 6.86647 12.701 7.04382 12.7641 7.2081C12.8271 7.37239 12.9181 7.52025 13.0314 7.64286L16.0624 11.1607Z" fill="white" />
                            </svg>
                            Logout
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    )
};

export default Navbar;