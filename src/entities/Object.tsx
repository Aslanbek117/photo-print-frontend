import { User  as UserEntity} from './User';

export interface CreateObjectDTO {
    name: string;
    user_id: number;
}

export interface ObjectEntity {

  id: number;

  name: string;

  created: Date;

  updated: Date;

  date: Date;

  created_by: UserEntity;

}