import {
  CourseFormatEnum,
  CoursesEnum,
  CourseStatusEnum,
  CourseTypeEnum,
  OrderFieldEnum,
} from '../enums';

export interface IParams {
  page: string;
  order: OrderFieldEnum;
  name: string;
  surname: string;
  email: string;
  phone: string;
  age: string;
  course: CoursesEnum;
  course_format: CourseFormatEnum;
  course_type: CourseTypeEnum;
  status: CourseStatusEnum;
  group: string;
  manager: string;
  start_date: string;
  end_date: string;
}
