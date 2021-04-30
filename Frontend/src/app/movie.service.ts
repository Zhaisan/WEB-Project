import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Movie} from './movies';
import {HttpClient} from '@angular/common/http';
import {movies} from './movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private client: HttpClient) {
  }
  BASE_URL = 'http://127.0.0.1:8000';
  getMovies(): Observable<Movie[]> {
    // return of(movies);
    return this.client.get<Movie[]>(`${this.BASE_URL}/api/movies/`);
  }

  getMoviesByGenreId(id: number): Observable<Movie[]> {
    // return this.client.get<Movie[]>(`${this.BASE_URL}/genre/${id}`);
    return of(movies.filter(movie => movie.genreId === id));
  }
}
